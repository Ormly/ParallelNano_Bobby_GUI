<template>
    <div class="nodes-management">
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
import UsersButtonContainer from "@/components/users-button-container";
import BaseTable from "@/components/base-table";

export default {
    name: "user-management",
    components: {UsersButtonContainer, BaseTable},
    data()
    {
        return {
            tableData: [
                {'username': 'devil01', 'home_directory': '/home/devil01'},
                {'username': 'devil02', 'home_directory': '/home/devil02'},
                {'username': 'devil03', 'home_directory': '/home/devil03'},
                {'username': 'devil04', 'home_directory': '/home/devil04'},
                {'username': 'devil05', 'home_directory': '/home/devil05'},
                {'username': 'devil06', 'home_directory': '/home/devil06'}
            ],
            tableColumns: [
                {
                    field: 'username',
                    label: 'Username'
                },
                {
                    field: 'home_directory',
                    label: 'Home Directory'
                }
            ],
            selectedTableData: {},
            buttonData: [
                {'label': 'Add New', 'icon': '', 'size': 'is-normal', 'type': 'is-primary'},
                {'label': 'Remove', 'icon': '', 'size': 'is-normal', 'type': 'is-primary'}
            ]
        }
    },
    methods: {
        storeSelectedData(selectedData)
        {
            this.selectedTableData = selectedData
        }
    }
}
</script>

<style scoped>
</style>
