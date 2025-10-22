import React, {useState, useEffect} from 'react';


const Products = () => {
    const [products, setProducts] = useState([]);

    // we use useEffect so this only runs when the component renders
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // we try to fetch the environmental variables from the .env, but also have a local host fallback
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                // we console log the fetched url to the console for debugging
                console.log('API URL:', apiUrl);
                console.log('Fetching from:', `${apiUrl}/api/products`);
                // api request, wait for fetch before continuing 
                const response = await fetch(`${apiUrl}/api/products`);
                // checking the response
                console.log('Response status:', response.status);
                // converting the response to json
                const data = await response.json();
                // console log for debugging to see whats been converted
                console.log('Products data:', data);
                // updating the products state variable with the json converted data from our database
                setProducts(data);

                // catch error if failed
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // running the above function
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {/* here we have a grid and we map through our products table in our database to display all the items we have */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>${product.price}</strong></p>
                        <p>Category: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;