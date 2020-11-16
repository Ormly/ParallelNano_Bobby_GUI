<template>
    <div class="users-management">
        <base-table
            :data="tableData"
            :columns="tableColumns"
            @select="storeSelectedData">
        </base-table>
        <br/>
        <users-button-container
            :button-data="buttonData">
        </users-button-container>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const usersAPI = APIFactory.get("users");

import UsersButtonContainer from "@/components/users/users-button-container";
import BaseTable from "@/components/base-components/base-table";

export default {
    name: "users-management",
    components: {UsersButtonContainer, BaseTable},
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
            rawUsersData: {},
            isLoading: false,
            tableData: [],
            tableColumns: [
                { field: 'user_name', label: 'Username' },
                { field: 'home_directory', label: 'Home Directory'}
            ],
            selectedTableData: {},
            buttonData: [
                {'label': 'Add New', 'icon': 'plus-thick', 'size': 'is-normal', 'type': 'is-primary', 'fullwidth':''},
                {'label': 'Remove', 'icon': 'delete-forever', 'size': 'is-normal', 'type': 'is-primary', 'fullwidth':''}
            ]
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
        storeSelectedData(selectedData)
        {
            this.selectedTableData = selectedData
        }
    }
}
</script>

<style scoped>
</style>
