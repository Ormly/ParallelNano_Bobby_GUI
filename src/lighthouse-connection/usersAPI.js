import API from "@/lighthouse-connection/API";

const userData = "/user_list";
const userDeletion = "/remove_user";
const userCreation = "/create_user";

/*
 * Users API endpoint, extendable.
 */
export default {
    data() {
        return {
            info: null
        }
    },
    getUsersData() {
        return API.get(`${userData}`).then(response => this.info = response.data.response.users);
    },
    deleteUser(username) {
        let url = `${userDeletion}` + '/' + username
        return API.get(url).then(response => this.info = response.data.response.result);
    },
    createUser(username, password, type) {
        let url = `${userCreation}` + '/' + username + '/' + password + '/' + type
        return API.get(url).then(response => this.info = response.data.response.result);
    }
};
