<template>
    <div class="users-management">
        <base-table
            :data="tableData"
            :columns="tableColumns"
            @select="storeSelectedData">
        </base-table>
        <users-button-container
            :button-data="buttonData"
            @button-clicked="evaluateEvents">
        </users-button-container>
        <br/>
        <users-removeuser-message
            v-if="showRemove"
            :user-to-remove="selectedTableData.user_name"
            @removeClosed="evaluateEvents"
            @removeUser="removeUser">
        </users-removeuser-message>
        <users-adduser-message
            v-if="showAddNew"
            @addNewClosed="evaluateEvents"
            @addNewUser="createUser">
        </users-adduser-message>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const usersAPI = APIFactory.get("users");

import UsersButtonContainer from "@/components/users/users-button-container";
import BaseTable from "@/components/base-components/base-table";
import UsersRemoveuserMessage from "@/components/users/messages/users-removeuser-message"
import UsersAdduserMessage from "@/components/users/messages/users-adduser-message";
/*
 * Manages "Users" section of the GUI. Responsible for housing data display and relevant messages.
 */
export default {
    name: "users-management",
    components: {UsersAdduserMessage, UsersButtonContainer, BaseTable, UsersRemoveuserMessage},
    created() {
      this.fetchUsersData()
      this.pollAPI()
      this.populateTable()
   },
    data()
    {
        return {
            polling: null,
            isFetchingUserData: false,
            isFetchingCreateResponse: false,
            isFetchingRemoveResponse: false,

            rawUsersData: {},
            tableData: [],
            tableColumns: [
                { field: 'user_name', label: 'Username' },
                { field: 'home_directory', label: 'Home Directory'}
            ],
            selectedTableData: {},

            buttonData: [
                {'label': 'Add New', 'icon': 'plus-thick', 'size': 'is-normal', 'type': 'is-primary', 'fullwidth':''},
                {'label': 'Remove', 'icon': 'delete-forever', 'size': 'is-normal', 'type': 'is-primary', 'fullwidth':''}
            ],

            activeMessage: String,
            showRemove: false,
            showAddNew: false,

            currentUserName: ''
        }
    },
    watch: {
      selectedTableData: function() {
        this.setCurrentUserName();
      }
    },
    methods: {
      async fetchUsersData() {
        this.isFetchingUserData = true
        this.rawUsersData = await usersAPI.getUsersData()
        this.isFetchingUserData = false
        this.populateTable()
      },
      async createUser(submissionData) {
        this.showAddNew = false

        this.isFetchingCreateResponse = true
        let response = await usersAPI.createUser(submissionData[0],submissionData[1],submissionData[2])
        this.isFetchingCreateResponse = false

        //TODO: error handling
        if(response === 'success');
      },
      async removeUser() {
        this.showRemove = false

        this.isFetchingRemoveResponse = true
        let response = await usersAPI.deleteUser(this.selectedTableData.user_name)
        this.isFetchingRemoveResponse = false

        if(response === 'success');
      },
      pollAPI () {
        this.polling = setInterval(() => {
          this.fetchUsersData()
        }, 5000)
      },
      populateTable() {
        this.tableData = []
        for(var index = 0; index < this.rawUsersData.length; index++) {
          let raw = this.rawUsersData[index];
          let entry = {
            'user_name': '' + raw,
            'home_directory': '/home/' + raw
          }
          this.tableData.push(entry)
        }
      },
      setCurrentUserName() {
        this.currentUserName = this.selectedTableData.user_name
      },
      evaluateEvents(payload) {
        this.closeActiveMessage();
        this.activeMessage = payload;

        switch(payload) {
          case 'Add New':
            this.showAddNew = true
            break;
          case 'Remove':
            if (!(this.currentUserName === ''))
              this.showRemove = true;
            break;
          case 'AddNewClosed':
            this.showAddNew = false;
            break;
          case 'RemoveClosed':
            this.showRemove = false;
            break;
        }
      },
      closeActiveMessage() {
        switch(this.activeMessage) {
          case 'Add New':
            this.showAddNew = false;
            break;
          case 'Remove':
            this.showRemove = false;
            break;
        }
      },
      storeSelectedData(selectedData)
      {
          this.selectedTableData = selectedData
      }
    },
    beforeDestroy() {
      clearInterval(this.polling)
    }
}
</script>

<style scoped>
</style>
