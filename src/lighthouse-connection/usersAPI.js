import API from "@/lighthouse-connection/API";

const userData = "/user_list";
//const userDeletion = "/remove_user";
//const userCreation = "/create_user";

export default {
    getUsersData() {
        return API.get(`${userData}`);
    },
    deleteUser() {

    }
};
