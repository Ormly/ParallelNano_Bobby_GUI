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
        let url = `${userCreation}` + '/' + user_name + '/' + user_password + '/' + user_type
        return API.get(url).then(response => this.info = response.data.response.result);
    }
};
