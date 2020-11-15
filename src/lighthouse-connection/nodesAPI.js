import API from "@/lighthouse-connection/API";

const resource = "/nodes_status";

export default {
    getNodesData() {
        return API.get(`${resource}`);
    },
};
