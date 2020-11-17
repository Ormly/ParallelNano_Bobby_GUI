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
        :host-name="hostName"
        :cpu-type="cpuType"
        :gpu-type="gpuType"
        :cpu-usage="cpuUsage"
        :ip-address="ipAddress"
        :memory-usage="memoryUsage"
        :platform="platform"
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
        :node-to-power-up="selectedTableData.node_name"
        @powerUpClosed="evaluateButtonEvents">
    </nodes-powerup-message>
    <nodes-reboot-message
        v-if="showReboot"
        :node-to-reboot="selectedTableData.node_name"
        @rebootClosed="evaluateButtonEvents">
    </nodes-reboot-message>
  </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const nodesAPI = APIFactory.get("nodes");

import BaseTable from "@/components/base-components/base-table";
import NodesButtonContainer from "@/components/nodes/nodes-button-container";
import NodesDetailsView from "@/components/nodes/nodes-details-view";
import NodesAddnewnodeMessage from "@/components/nodes/messages/nodes-addnewnode-message";
import NodesRemovenodeMessage from "@/components/nodes/messages/nodes-removenode-message";
import NodesPowerdownMessage from "@/components/nodes/messages/nodes-powerdown-message";
import NodesPowerupMessage from "@/components/nodes/messages/nodes-powerup-message";
import NodesRebootMessage from "@/components/nodes/messages/nodes-reboot-message";
export default {
name: "nodes-management",
  components: {
    NodesRebootMessage,
    NodesPowerupMessage,
    NodesPowerdownMessage,
    NodesRemovenodeMessage, NodesAddnewnodeMessage, NodesDetailsView, NodesButtonContainer, BaseTable},
  created() {
    this.fetchNodesData()
    //this.pollAPI()
    this.populateTable()
    //{ 'node_name': 'Johnny_06', 'ip_address': '10.0.0.209', 'status': 'Up'}
  },
  data() {
    return {
      polling: null,
      isLoading: false,

      rawNodesData: {},
      tableData: [],
      tableColumns: [
        { field: 'node_name', label: 'Node'},
        { field: 'ip_address', label: 'IP address'},
        { field: 'status', label: 'Status'}
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

      hostName: '',
      cpuType: '',
      gpuType: '',
      cpuUsage: '',
      memoryUsage: '',
      ipAddress: '',
      platform: '',

      activeMessage: String,
      showDetails: false,
      showAddNew: false,
      showRemove: false,
      showPowerUp: false,
      showPowerDown: false,
      showReboot: false
    }
  },
  watch: {
    selectedTableData: function() {
      this.populateDetailsView();
    }
  },
  methods: {
    async fetchNodesData() {
      this.isLoading = true
      this.rawNodesData = await nodesAPI.getNodesData()
      this.isLoading = false
      this.populateTable()
    },
    pollAPI () {
      this.polling = setInterval(() => {
        this.fetchNodesData()
      }, 10000)
    },
    populateTable() {
      this.tableData = []
      for(var index = 0; index < this.rawNodesData.length; index++) {
        var raw = this.rawNodesData[index];
        var entry = {
            'node_name': raw.hostname,
            'ip_address': raw.ip_address,
            'status': 'up'
        }
        this.tableData.push(entry)
      }
    },
    populateDetailsView() {
      if (this.tableData && this.tableData.length) {
        for(var indexOuter = 0; indexOuter < this.rawNodesData.length; indexOuter++) {
            if(this.rawNodesData[indexOuter].hostname === this.selectedTableData.node_name) {
              let temp = this.rawNodesData[indexOuter]
              this.hostName = temp.hostname
              this.cpuType = temp.cpu
              this.gpuType = temp.gpu
              this.cpuUsage = '' + temp.cpu_usage
              this.memoryUsage = '' + temp.mem_usage
              this.ipAddress = temp.ip_address
              this.platform = temp.platform
            }
        }
      }
    },
    storeSelectedData(selectedData) {
      this.selectedTableData = selectedData
    },
    evaluateButtonEvents(buttonLabel) {
        this.closeActiveMessage();
        this.activeMessage = buttonLabel;

        switch(this.activeMessage) {
            case 'Details':
                if (!(this.hostName === ''))
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
            case 'PowerUpClosed':
              this.showPowerUp = false;
              break;
            case 'RebootClosed':
              this.showReboot = false;
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
  },
  beforeDestroy() {
    clearInterval(this.polling)
  }
}
</script>

<style scoped>
</style>
