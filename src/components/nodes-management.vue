<template>
  <div class="nodes-management">
    <base-table
      :data="tableData"
      :columns="tableColumns"
      @select="storeSelectedData">
    </base-table>
    <br/>
    <nodes-button-container
      :button-data="buttonData"
      @button-clicked="evaluateButtonEvent">
    </nodes-button-container>
    <br/>
    <nodes-details-view v-if="showDetails"
        host-name="Johnny_05"
        cpu-type="x86_64"
        cpu-usage="3.7"
        ip-address="10.0.0.113"
        memory-usage="8.5554"
        platform="Linux-5.4.0-48-generic-x86_x64-with-glibc2.29">
    </nodes-details-view>
    <nodes-addnewnode-message v-else-if="showAddNew"></nodes-addnewnode-message>
  </div>
</template>

<script>
import BaseTable from "@/components/base-table";
import NodesButtonContainer from "@/components/nodes-button-container";
import NodesDetailsView from "@/components/nodes-details-view";
import NodesAddnewnodeMessage from "@/components/nodes-addnewnode-message";
export default {
name: "nodes-management",
  components: {NodesAddnewnodeMessage, NodesDetailsView, NodesButtonContainer, BaseTable},
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
        {'label':'Details', 'icon':'help-circle', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Add New', 'icon':'plus-thick', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Remove', 'icon':'delete-forever', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Down', 'icon':'power-plug-off', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Up', 'icon':'power-plug', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Reboot', 'icon':'autorenew', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'}
      ],
      showDetails: false,
      showAddNew: false
    }
  },
  methods: {
    storeSelectedData(selectedData) {
      this.selectedTableData = selectedData
    },
    evaluateButtonEvent(buttonLabel) {
        switch(buttonLabel) {
            case 'Details':
                this.toggleDetailsView();
                break;
            case 'Add New':
                this.toggleAddNewMessage();
                break;
        }
    },
    toggleDetailsView() {
        this.showDetails = !(this.showDetails);
    },
    toggleAddNewMessage() {
        this.showAddNew = !(this.showAddNew);
    }
  }
}
</script>

<style scoped>
</style>
