import API from "@/lighthouse-connection/API";

const status = "/nodes_status";

export default {
    data() {
        return {
            info: null
        }
    },
    getNodesData() {
        return API.get(`${status}`).then(response => this.info = response.data);
    },
};
