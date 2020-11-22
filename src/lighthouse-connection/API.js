import axios from "axios";

const baseDomain = "http://lisa:8000"
const baseURL = `${baseDomain}`;

/*
 * Holds Lisa domain information, creates axios instance.
 */
export default axios.create({
    baseURL
});
