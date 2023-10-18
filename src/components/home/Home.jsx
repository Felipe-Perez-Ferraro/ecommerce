import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from '../../redux/products/productsSlice';
import Products from '../product/Products';

function Home() {
  const { products, isFetched, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchProductsThunk());
    }
  }, [dispatch, isFetched]);

  return (
    <section>
      {error ? (
        <h2>Error: {error.message}</h2>
      ) : isFetched ? (
        products.map((prod) => (
          <Products 
            key={prod.id}
            title={prod.title}
            image={prod.image}
            price={prod.price}
          />
        ))
        ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}

export default Home;
