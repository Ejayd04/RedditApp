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
        <div>
            <input 
                type="text" 
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            {/* Add search button or functionality as needed */}
        </div>
    );
}

export default SearchBar;