import axios from "axios";

const apiUrl = "http://localhost:8080/main/";

export const login = async (formData) => {
  console.log("from post", formData);
  try {
    console.log("tryssssssss");
    let response = await axios.post(apiUrl + "login", formData);

    // , {
    //   headers: {
    //     'Content-Type': 'multipart/form-data', // or other content type if needed
    //     // Add any additional headers if required, e.g., authorization headers
    //   },
    console.log("response data====>", response);
    return response.data;
  } catch (err) {
    console.error("err======", err);
  }
};

export const register = async (formData) => {
  try {
    let response = await axios.post(apiUrl + "register", formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
