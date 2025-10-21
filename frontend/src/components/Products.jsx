import React, {useState, useEffect} from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <h1>Products</h1>
            <p>Products will be displayed here</p>
        </div>
    );
};

export default Products;