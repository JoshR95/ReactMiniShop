import React, {useState, useEffect} from 'react';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Track which page we're on
    const [pagination, setPagination] = useState({ total: 0, per_page: 9, last_page: 1 }); // Store pagination metadata
    const [searchTerm, setSearchTerm] = useState(''); // Store what user types in search box
    const [selectedCategory, setSelectedCategory] = useState('');
    const itemsPerPage = 9; // Show 12 items per page

    // we use useEffect so this re-fetches when currentPage changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // we try to fetch the environmental variables from the .env, but also have a local host fallback
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
                
                // Build URL with pagination + search filter
                let url = `${apiUrl}/api/products?page=${currentPage}&per_page=${itemsPerPage}`;
                
                // If user typed something in search box, add it to the URL
                if (searchTerm) {
                    // this appends the search word to the url when entered into the search bar
                    url += `&search=${encodeURIComponent(searchTerm)}`;
                }
                // if user selected a category, add it to the URL
                if(selectedCategory){
                    // this appends the category to the url when the category is selected
                    url += `&category=${encodeURIComponent(selectedCategory)}`;
                }
                
                console.log('Fetching from:', url);
                
                // api request, wait for fetch before continuing 
                const response = await fetch(url);
                console.log('Response status:', response.status);
                
                // converting the response to json
                const data = await response.json();
                console.log('Products data:', data);
                
                // Laravel returns: { data: [...products...], current_page: 1, last_page: 3, total: 25, ... }
                // We store the actual products in the "data" property
                setProducts(data.data || []);
                
                // Store pagination metadata
                setPagination({
                    total: data.total,
                    current_page: data.current_page,
                    last_page: data.last_page,
                    per_page: data.per_page
                });

                // catch error if failed
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // running the above function (re-runs whenever currentPage OR searchTerm changes!)
        fetchProducts();
    }, [currentPage, searchTerm, selectedCategory]); // Dependency array: re-fetch when currentPage OR searchTerm changes

    // Function to change pages - triggers new API call
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber); // This triggers useEffect to re-fetch from API
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="search-bar">
                {/* Search Bar */}
                <input 
                    type="text"
                    placeholder="Search products by name..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to page 1 when searching
                    }}
                    className="search-input"
                />
                <select
                    // value is what changes state, is always set to all categories to begin with as its value is ''
                    value = {selectedCategory}
                    // listens for an onchange on the drop and take the event as a parameter
                    onChange={(e) => {
                        // sets state to the selected value/category
                        setSelectedCategory(e.target.value);
                        // sets page to number 1
                        setCurrentPage(1);
                    }}
                    className="category-select"
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Tools">Tools</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Sports">Sports</option>
                    <option value="Home & Garden">Home & Garden</option>
                </select>

                         
            </div>


            {/* Products Grid - we map through products and display an item with all its information for each database entry */}
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="product-price"><strong>${product.price}</strong></p>
                        <p>Category: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                ))}
            </div>

            {/* Simple Pagination Controls */}
            <div className="pagination">
                <button 
                    className="primary"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </button>

                <span>
                    Page {currentPage} / {pagination.last_page}
                </span>

                <button 
                    className="primary"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === pagination.last_page}
                >
                    Next →
                </button>
                <p className="page-info">
                    Page {pagination.current_page} of {pagination.last_page} ({pagination.total} total products)
                </p>       
            </div>
        </div>
    );
};

export default Products;