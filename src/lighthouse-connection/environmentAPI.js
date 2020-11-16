import API from "@/lighthouse-connection/API";

const resource = "/temp_humidity";

export default {
    data() {
        return {
            info: null
        }
    },
    getEnvironmentData() {
        return API.get(`${resource}`).then(response => this.info = response.data);
    }
};
