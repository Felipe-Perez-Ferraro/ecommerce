import React from 'react';

function Product({ title, image, price }) {
  return (
    <article>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
    </article>
  );
}

export default Product;
