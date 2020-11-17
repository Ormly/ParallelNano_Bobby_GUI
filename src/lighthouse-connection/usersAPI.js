import API from "@/lighthouse-connection/API";

const userData = "/user_list";
//const userDeletion = "/remove_user";
const userCreation = "/create_user";

export default {
    data() {
        return {
            info: null
        }
    },
    getUsersData() {
        return API.get(`${userData}`).then(response => this.info = response.data.response.users);
    },
    deleteUser() {

    },
    createUser(user_name, user_password, user_type) {
        return API.get(`${userCreation}`, {params:{username: user_name, password: user_password, usertype: user_type}}).then(response => this.info = response.data.response.status);
    }
};
