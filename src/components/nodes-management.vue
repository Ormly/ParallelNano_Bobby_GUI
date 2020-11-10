<template>
  <div class="nodes-management">
    <base-table
      :data="tableData"
      :columns="tableColumns"
      @select="storeSelectedData">
    </base-table>
    <br/>
    <button-container
      :button-data="buttonData">
    </button-container>
  </div>
</template>

<script>
import BaseTable from "@/components/base-table";
import ButtonContainer from "@/components/nodes-button-container";
export default {
name: "nodes-management",
  components: {ButtonContainer, BaseTable},
  data() {
    return {
      tableData: [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
      ],
      tableColumns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
          label: 'Last Name',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender',
        }
      ],
      selectedTableData: {},
      buttonData: [
        {'label':'Details', 'icon':'', 'size':'is-normal', 'type':'is-primary'},
        {'label':'Add New', 'icon':'', 'size':'is-normal', 'type':'is-primary'},
        {'label':'Remove', 'icon':'', 'size':'is-normal', 'type':'is-primary'},
        {'label':'Power Down', 'icon':'', 'size':'is-normal', 'type':'is-primary'},
        {'label':'Power Up', 'icon':'', 'size':'is-normal', 'type':'is-primary'},
        {'label':'Reboot', 'icon':'', 'size':'is-normal', 'type':'is-primary'}
      ]
    }
  },
  methods: {
    storeSelectedData(selectedData) {
      this.selectedTableData = selectedData
    }
  }
}
</script>

<style scoped>
</style>
