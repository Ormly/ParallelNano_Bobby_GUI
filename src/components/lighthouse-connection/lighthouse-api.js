import axios from "axios";

const baseDomain = "http://lisa:8000";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
