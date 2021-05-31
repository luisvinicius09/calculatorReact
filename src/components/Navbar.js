import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const stylesLink = {
    margin: '30px',
  };

  return (
    <>
      <div style={styles}>
        <div style={{ marginLeft: '10px' }}>
          <h1>Math Magicians</h1>
        </div>
        <div style={stylesLink}>
          <Link style={{ paddingRight: '10px' }} to="/">Home</Link>
          <Link style={{ paddingRight: '10px' }} to="/calculator">Calculator</Link>
          <Link to="/quote">Quote of the day</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
