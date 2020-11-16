import API from "@/lighthouse-connection/API";

const resource = "/nodes_status";

export default {
    data() {
        return {
            info: null
        }
    },
    getNodesData() {
        return API.get(`${resource}`).then(response => this.info = response.data);
    },
};
