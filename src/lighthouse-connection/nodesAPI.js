import API from "@/lighthouse-connection/API";

const resource = "/compute_node_beacon";

export default {
    getNodeData() {
        return API.get(`${resource}`);
    }
};
