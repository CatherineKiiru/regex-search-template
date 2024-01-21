import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

export const getPosts = async () => {
  const api = axios.create({ 
    baseURL: "https://jsonplaceholder.typicode.com" 
  });
  const res = await api.get("/posts");
  return res.data;
};
