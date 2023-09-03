import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      <h2>{params.productId}</h2>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
