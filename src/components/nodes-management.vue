<template>
  <div class="nodes-management">
    <base-table
      :data="tableData"
      :columns="tableColumns"
      @select="storeSelectedData">
    </base-table>
      <nodes-button-container
        :button-data="buttonData"
        @button-clicked="evaluateButtonEvents">
      </nodes-button-container>
    <br/>
    <nodes-removenode-message
        v-if="showRemove"
        :node-to-remove="selectedTableData.node_name"
        @removeClosed="evaluateButtonEvents">
    </nodes-removenode-message>
    <nodes-details-view v-if="showDetails"
        host-name="Johnny_05"
        cpu-type="x86_64"
        cpu-usage="3.7"
        ip-address="10.0.0.113"
        memory-usage="8.5554"
        platform="Linux-5.4.0-48-generic-x86_x64-with-glibc2.29"
        @detailsClosed="evaluateButtonEvents">
    </nodes-details-view>
    <nodes-addnewnode-message
        v-if="showAddNew"
        @addNewClosed="evaluateButtonEvents">
    </nodes-addnewnode-message>
    <nodes-powerdown-message
        v-if="showPowerDown"
        :node-to-power-down="selectedTableData.node_name"
        @powerDownClosed="evaluateButtonEvents">
    </nodes-powerdown-message>
    <nodes-powerup-message
        v-if="showPowerUp"
        :node-to-power-up="selectedTableData.node_name">
    </nodes-powerup-message>
  </div>
</template>

<script>
import BaseTable from "@/components/base-table";
import NodesButtonContainer from "@/components/nodes-button-container";
import NodesDetailsView from "@/components/nodes-details-view";
import NodesAddnewnodeMessage from "@/components/nodes-addnewnode-message";
import NodesRemovenodeMessage from "@/components/nodes-removenode-message";
import NodesPowerdownMessage from "@/components/nodes-powerdown-message";
import NodesPowerupMessage from "@/components/nodes-powerup-message";
export default {
name: "nodes-management",
  components: {
    NodesPowerupMessage,
    NodesPowerdownMessage,
    NodesRemovenodeMessage, NodesAddnewnodeMessage, NodesDetailsView, NodesButtonContainer, BaseTable},
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
      activeMessage: String,
      showDetails: false,
      showAddNew: false,
      showRemove: false,
      showPowerUp: false,
      showPowerDown: false,
      showReboot: false
    }
  },
  methods: {
    storeSelectedData(selectedData) {
      this.selectedTableData = selectedData
    },
    evaluateButtonEvents(buttonLabel) {
        this.closeActiveMessage();
        this.activeMessage = buttonLabel;

        switch(this.activeMessage) {
            case 'Details':
                this.showDetails = true;
                break;
            case 'Add New':
                this.showAddNew = true;
                break;
            case 'Remove':
                this.showRemove = true;
                break;
            case 'Power Up':
                this.showPowerUp = true;
                break;
            case 'Power Down':
                this.showPowerDown = true;
                break;
            case 'Reboot':
                this.showReboot = true;
                break;
            case 'AddNewClosed':
                this.showAddNew = false;
                break;
            case 'RemoveClosed':
                this.showRemove = false;
                break;
            case 'DetailsClosed':
              this.showDetails = false;
              break;
            case 'PowerDownClosed':
              this.showPowerDown = false;
              break;
            case 'PowerUpclosed':
              this.showPowerUp = false;
              break;
        }
    },
    closeActiveMessage() {
        switch(this.activeMessage) {
            case 'Details':
                this.showDetails = false;
                break;
            case 'Add New':
                this.showAddNew = false;
                break;
            case 'Remove':
                this.showRemove = false;
                break;
            case 'Power Up':
                this.showPowerUp = false;
                break;
            case 'Power Down':
                this.showPowerDown = false;
                break;
            case 'Reboot':
                this.showReboot = false;
                break;
        }
    }
  }
}
</script>

<style scoped>
</style>
