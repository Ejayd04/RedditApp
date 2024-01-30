// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={leftSectionStyle}>
        <Link to="/">
          {/* Assuming you have an image for the Reddit logo */}
          <img src="https://preview.redd.it/reddit-logo-changes-to-old-non-pixelated-logo-sign-of-v0-1povzsj8o0eb1.jpg?width=640&crop=smart&auto=webp&s=8bab770af358cf676163dbde410c9caa2b13cbe5" alt="Reddit Logo" style={logoStyle} />
        </Link>
        <h1 style={titleStyle}>Reddit South Korea</h1>
        {/* Assuming you have an image for the South Korean flag */}
        <img src="https://ongpng.com/wp-content/uploads/2023/08/South-Korea-flag.png" alt="South Korean Flag" style={flagStyle} />
      </div>
      <div style={rightSectionStyle}>
        {/* This can be a button that triggers your search functionality */}
        <SearchBar />
      </div>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: 'rgb(17, 41, 58)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: 'auto',
};

const logoStyle = {
  width: '30px', // Adjust the size as needed
  marginRight: '10px',
};

const titleStyle = {
  color: 'white',
  fontSize: '1rem', // Adjust the size as needed
  margin: 0,
};

const flagStyle = {
  width: '30px', // Adjust the size as needed
  marginLeft: '10px',
};

const rightSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
};

export default Header;
