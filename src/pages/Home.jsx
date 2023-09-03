import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">List of Products</Link>
      </p>

      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
};

export default Home;
