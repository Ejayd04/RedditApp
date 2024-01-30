import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../store/actions';

function SearchBar() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchPosts(searchQuery));
    };

    return (
        <div style={searchBarStyle}>
            <input 
                type="text" 
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={inputStyle} 
            />
            <button onClick={handleSearch} style={buttonStyle}>Search</button>
            {/* Add search button or functionality as needed */}
        </div>
    );
}

const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0',
};

const inputStyle = {
    borderRadius: '5px',
    padding: '8px',
    marginRight: '10px',
};

const buttonStyle = {
    borderRadius: '5px',
    padding: '8px',
    backgroundColor: 'rgb(17, 41, 58)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

export default SearchBar;