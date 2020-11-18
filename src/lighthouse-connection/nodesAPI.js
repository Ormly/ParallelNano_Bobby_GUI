import API from "@/lighthouse-connection/API";

const status = "/nodes_status";
const nodes = "/nodes";
const powerDown = "/shutdown";
const powerUp = "/power_on"

export default {
    data() {
        return {
            info: null
        }
    },
    getNodesData() {
        return API.get(`${status}`).then(response => this.info = response.data.nodes_status);
    },
    getAvailableNodes() {
        return API.get(`${nodes}`).then(response => this.info = response.data.response.nodes);
    },
    powerDownNode(nodeNumber) {
        let url = `${powerDown}` + '/' + nodeNumber;
        return API.get(url).then(response => this.info = response.data.response.result)
    },
    powerUpNode(nodeNumber) {
        let url = `${powerUp}` + '/' + nodeNumber;
        return API.get(url).then(response => this.info = response.data.response.result)
    }
};
