<template>
    <div class="users-management">
        <base-table
            :data="tableData"
            :columns="tableColumns"
            @select="storeSelectedData">
        </base-table>
        <users-button-container
            :button-data="buttonData"
            @button-clicked="evaluateButtonEvents">
        </users-button-container>
        <br/>
        <users-removeuser-message
            v-if="showRemove"
            :user-to-remove="selectedTableData.user_name"
            @removeClosed="evaluateButtonEvents">
        </users-removeuser-message>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const usersAPI = APIFactory.get("users");

import UsersButtonContainer from "@/components/users/users-button-container";
import BaseTable from "@/components/base-components/base-table";
import UsersRemoveuserMessage from "@/components/users/messages/users-removeuser-message"

export default {
    name: "users-management",
    components: {UsersButtonContainer, BaseTable, UsersRemoveuserMessage},
    created() {
      this.fetchUsersData()
      //this.pollAPI()
      this.populateTable()
      //{ 'node_name': 'Johnny_06', 'ip_address': '10.0.0.209', 'status': 'Up'}
   },
    data()
    {
        return {
            //'username': 'devil06', 'home_directory': '/home/devil06'
            polling: null,
            isLoading: false,

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
        this.isLoading = true
        this.rawUsersData = await usersAPI.getUsersData()
        this.isLoading = false
        this.populateTable()
      },
      pollAPI () {
        this.polling = setInterval(() => {
          this.fetchUsersData()
        }, 10000)
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
      evaluateButtonEvents(buttonLabel) {
        this.closeActiveMessage();
        this.activeMessage = buttonLabel;

        switch(this.activeMessage) {
          case 'Add New':
            this.showAddNew = true;
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
