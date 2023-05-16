import axios from "axios";
//const apiURL = process.env.REACT_APP_API_URL;

export const DashboardData = async () => {
  try {
    let res = await axios.post(`https://ecommerce-backend-ygm7.onrender.com/api/customize/dashboard-data`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSliderImages = async () => {
  try {
    let res = await axios.get(`https://ecommerce-backend-ygm7.onrender.com/api/customize/get-slide-image`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUploadImage = async (formData) => {
  try {
    let res = await axios.post(
      `https://ecommerce-backend-ygm7.onrender.com/api/customize/upload-slide-image`,
      formData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDeleteImage = async (id) => {
  try {
    let res = await axios.post(`https://ecommerce-backend-ygm7.onrender.com/api/customize/delete-slide-image`, {
      id,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
