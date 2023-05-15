const baseUrl = 'https://fakestoreapi.com/products/'


const getProducts = async () => {
   try {
      let response = await fetch(baseUrl);
      let data = await response.json();
      return data
   } catch (error) {
      console.log(error);
   }
};

const getProductById = async (id) => {
   try {
      let response = await fetch(baseUrl + id);
      let data = await response.json();
      return data
   } catch (error) {
      console.log(error);
   }
};

export { getProducts, getProductById }