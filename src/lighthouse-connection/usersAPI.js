import API from "@/lighthouse-connection/API";

const resource = "";

export default {
    getUsersData() {
        return API.get(`${resource}`);
    }
};
