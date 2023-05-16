import axios from "axios";
const apiURL = "https://ecommerce-backend-ygm7.onrender.com";

export const wishListProducts = async () => {
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  try {
    let res = await axios.post(`${apiURL}/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
