import React from 'react';
import NavBar from './Navbar';

const Quote = () => (
  <>
    <NavBar />
    <div style={{ margin: '50px', textAlign: 'center' }}>
      <h1>Hello from the real world</h1>
      <p>
        What you know you can&#39;t explain, but you feel it.
        <br />
        You&#39;ve felt it your entire life, that there&#39;s something wrong with the world.
        You don&#39;t know what it is, but it&#39;s there,
        like a splinter in your mind, driving you mad.
      </p>
    </div>
  </>
);

export default Quote;
