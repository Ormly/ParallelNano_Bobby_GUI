<template>
  <div class="nodes-management">
    <base-table
      :data="tableData"
      :columns="tableColumns"
      @select="storeSelectedData">
    </base-table>
    <br/>
    <nodes-button-container
      :button-data="buttonData">
    </nodes-button-container>
  </div>
</template>

<script>
import BaseTable from "@/components/base-table";
import NodesButtonContainer from "@/components/nodes-button-container";
export default {
name: "nodes-management",
  components: {NodesButtonContainer, BaseTable},
  data() {
    return {
      tableData: [
        { 'node_name': 'Johnny_01', 'ip_address': '10.0.0.110', 'status': 'Up'},
        { 'node_name': 'Johnny_02', 'ip_address': '10.0.0.93', 'status': 'Up'},
        { 'node_name': 'Johnny_03', 'ip_address': '10.0.0.143', 'status': 'Up'},
        { 'node_name': 'Johnny_04', 'ip_address': '10.0.0.117', 'status': 'Down'},
        { 'node_name': 'Johnny_05', 'ip_address': '10.0.0.113', 'status': 'Up'},
        { 'node_name': 'Johnny_06', 'ip_address': '10.0.0.209', 'status': 'Up'},
        { 'node_name': 'Johnny_07', 'ip_address': '10.0.0.254', 'status': 'Down'}
      ],
      tableColumns: [
        {
          field: 'node_name',
          label: 'Node',
        },
        {
          field: 'ip_address',
          label: 'IP address',
        },
        {
          field: 'status',
          label: 'Status',
        }
      ],
      selectedTableData: {},
      buttonData: [
        {'label':'Details', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Add New', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Remove', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Down', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Up', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Reboot', 'icon':'', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'}
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
