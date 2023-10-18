const fecthApi = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fecthApi;
