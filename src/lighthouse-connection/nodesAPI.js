import API from "@/lighthouse-connection/API";

const status = "/nodes_status";
const nodes = "/nodes";

export default {
    data() {
        return {
            info: null
        }
    },
    getNodesData() {
        return API.get(`${status}`).then(response => this.info = response.data);
    },
    getAvailableNodes() {
        return API.get(`${nodes}`).then(response => this.info = response.data.response.nodes);
    }
};
