import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-clon-backend.herokuapp.com/",
});

export default instance;