import environmentAPI from "@/lighthouse-connection/environmentAPI";
import nodesAPI from "@/lighthouse-connection/nodesAPI";
import usersAPI from "@/lighthouse-connection/usersAPI";

const apis = {
    environment: environmentAPI,
    users: usersAPI,
    nodes: nodesAPI
};

/*
 * Simple factory meant to provide API endpoints for environment, user and nodes sections.
 */
export const APIFactory = {
    get: name => apis[name]
};
