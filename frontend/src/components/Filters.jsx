import React from 'react';
import './components_css/Filters.css';

// This component receives filter values and onChange functions as props
// The parent component (Products.jsx) owns the state, but this component handles the UI
const Filters = ({ 
    searchTerm, 
    onSearchChange, 
    selectedCategory, 
    onCategoryChange,
    minPrice,
    onMinPriceChange,
    maxPrice,
    onMaxPriceChange
}) => {
    return (
        <aside className="filters-sidebar">
            <h2>Filters</h2>
            
            {/* Search Bar Section */}
            <div className="filter-section">
                <label htmlFor="search-input">Search</label>
                <input 
                    id="search-input"
                    type="text"
                    placeholder="Search products by name..."
                    value={searchTerm}
                    onChange={(e) => {
                        // Call the function passed from parent - it will update state in Products.jsx
                        onSearchChange(e.target.value);
                    }}
                    className="search-input"
                />
            </div>
            
            {/* Category Filter Section */}
            <div className="filter-section">
                <label htmlFor="category-select">Category</label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => {
                        // Call the function passed from parent - it will update state in Products.jsx
                        onCategoryChange(e.target.value);
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
            {/* Price Range Filter Section */}
            <div className="filter-section">
                <label htmlFor="price-range">Price Range</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <input 
                        id="min-price-input"
                        type="number"
                        placeholder="Min price"
                        value={minPrice}
                        onChange={(e) => {
                            onMinPriceChange(e.target.value);
                        }}
                        className="search-input"
                        style={{ width: '48%' }}
                    />
                    <input 
                        id="max-price-input"
                        type="number"
                        placeholder="Max price"
                        value={maxPrice}
                        onChange={(e) => {
                            onMaxPriceChange(e.target.value);
                        }}
                        className="search-input"
                        style={{ width: '48%' }}
                    />
                </div>
            </div>
            
            {/* 
                still to add -
                
                - Popular/Featured checkbox
                - Brand filter
                - etc.
            */}
        </aside>
    );
};

export default Filters;

