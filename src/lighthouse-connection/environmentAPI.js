import API from "@/lighthouse-connection/API";

const resource = "/sensor_status";

/*
 * Environment API endpoint, extendable.
 */
export default {
    data() {
        return {
            info: null
        }
    },
    getEnvironmentData() {
        return API.get(`${resource}`).then(response => this.info = response.data.sensor_status);
    }
};
