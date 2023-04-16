import axios from "axios";
//http://31.220.53.102:5000/
//http://localhost:5000/api/
const newRequest = axios.create({
  baseURL: "https://api.branaverse.com/api/",
  withCredentials: true,
});

export default newRequest;
