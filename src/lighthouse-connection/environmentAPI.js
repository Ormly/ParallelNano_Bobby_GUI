import API from "@/lighthouse-connection/API";

const resource = "/temp_humidity";

export default {
    getEnvironmentData() {
        return API.get(`${resource}`);
    }
};
