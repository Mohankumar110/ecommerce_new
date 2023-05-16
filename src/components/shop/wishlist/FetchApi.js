import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axios.post(`https://ecommerce-backend-ygm7.onrender.com/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
