import environmentAPI from "@/lighthouse-connection/environmentAPI";
import nodesAPI from "@/lighthouse-connection/nodesAPI";
import usersAPI from "@/lighthouse-connection/usersAPI";

const apis = {
    environment: environmentAPI,
    users: usersAPI,
    nodes: nodesAPI
};

export const APIFactory = {
    get: name => apis[name]
};
