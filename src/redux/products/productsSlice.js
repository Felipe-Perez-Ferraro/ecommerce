import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isFetched: false,
  error: false,
};

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchproducts',
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    const products = data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
    }));
    return products
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isFetched = true;
      state.error = false;
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.isFetched = false;
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
