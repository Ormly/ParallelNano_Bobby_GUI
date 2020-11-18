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
    <nodes-details-view v-if="showDetails"
        :host-name="currentHostName"
        :cpu-type="currentCpuType"
        :gpu-type="currentGpuType"
        :cpu-usage="currentCpuUsage"
        :ip-address="currentIpAddress"
        :memory-usage="currentMemoryUsage"
        :platform="currentPlatform"
        @detailsClosed="evaluateButtonEvents">
    </nodes-details-view>
    <nodes-addnewnode-message
        v-if="showAddNew"
        @addNewClosed="evaluateButtonEvents">
    </nodes-addnewnode-message>
    <nodes-powerdown-message
        v-if="showPowerDown"
        :node-to-power-down="selectedTableData.node_name"
        @powerDownClosed="evaluateButtonEvents"
        @powerDown="powerDownSelectedNode">
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
import NodesPowerdownMessage from "@/components/nodes/messages/nodes-powerdown-message";
import NodesPowerupMessage from "@/components/nodes/messages/nodes-powerup-message";
import NodesRebootMessage from "@/components/nodes/messages/nodes-reboot-message";
export default {
name: "nodes-management",
  components: {
    NodesRebootMessage,
    NodesPowerupMessage,
    NodesPowerdownMessage,NodesAddnewnodeMessage, NodesDetailsView, NodesButtonContainer, BaseTable},
  created() {
    this.fetchAvailableNodesData()
    this.fetchCurrentNodesData()
    this.pollAPI()
    //{ 'node_name': 'Johnny_06', 'ip_address': '10.0.0.209', 'status': 'Up'}
  },
  data() {
    return {
      polling: null,
      isFetchingCurrentData: false,
      isFetchingShutdownResponse: false,

      currentNodesData: {},
      availableNodesData: {},

      tableData: [],
      tableColumns: [
        { field: 'node_name', label: 'Node'},
        { field: 'ip_address', label: 'IP address'},
        { field: 'status', label: 'Status'}
      ],
      selectedTableData: {},
      selectedNodeNumber: null,

      buttonData: [
        {'label':'Details', 'icon':'help-circle', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Add New', 'icon':'plus-thick', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Down', 'icon':'power-plug-off', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Power Up', 'icon':'power-plug', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'},
        {'label':'Reboot', 'icon':'autorenew', 'size':'is-normal', 'type':'is-primary', 'fullwidth':'is-fullwidth'}
      ],

      currentHostName: '',
      currentCpuType: '',
      currentGpuType: '',
      currentCpuUsage: '',
      currentMemoryUsage: '',
      currentIpAddress: '',
      currentPlatform: '',

      activeMessage: String,
      showDetails: false,
      showAddNew: false,
      showPowerUp: false,
      showPowerDown: false,
      showReboot: false
    }
  },
  watch: {
    selectedTableData: function() {
      this.setSelectedNodeNumber()
      this.populateDetailsView();
    },
    panic: function() {
      this.systemShutdown()
    }
  },
  props: {
    panic: Boolean
  },
  methods: {
    async fetchCurrentNodesData() {
      this.isFetchingCurrentData = true
      this.currentNodesData = await nodesAPI.getNodesData()
      this.isFetchingCurrentData = false
      this.checkNodeStatus()
    },
    pollAPI () {
      this.polling = setInterval(() => {
        this.fetchCurrentNodesData()
      }, 5000)
    },
    async fetchAvailableNodesData() {
      this.availableNodesData = await nodesAPI.getAvailableNodes()
      this.seedTable()
    },
    async powerDownSelectedNode() {
      this.isFetchingShutdownResponse = true
      let response = await nodesAPI.powerDownNode(this.selectedNodeNumber)
      this.isFetchingShutdownResponse = false

      if(response === 'OK');
    },
    setSelectedNodeNumber() {
      for(let index = 0; index < this.tableData.length; index++) {
        let selectedName = this.selectedTableData.node_name
        let nameInTable = this.tableData[index].node_name

        if(selectedName === nameInTable)
          this.selectedNodeNumber = index
      }
    },
    seedTable() {
      this.tableData = []
      for(let index = 0; index < this.availableNodesData.length; index++) {
        let raw = this.availableNodesData[index];
        let entry = {
            'node_name': raw,
            'ip_address': '?',
            'status': '?'
        }
        this.tableData.push(entry)
      }
    },
    populateDetailsView() {
      if (this.tableData && this.tableData.length) {
        for(let indexOuter = 0; indexOuter < this.currentNodesData.length; indexOuter++) {
            if(this.currentNodesData[indexOuter].hostname === this.selectedTableData.node_name) {
              let temp = this.currentNodesData[indexOuter]
              this.currentHostName = temp.hostname
              this.currentCpuType = temp.cpu
              this.currentGpuType = temp.gpu
              this.currentCpuUsage = '' + temp.cpu_usage
              this.currentMemoryUsage = '' + temp.mem_usage
              this.currentIpAddress = temp.ip_address
              this.currentPlatform = temp.platform
            }
        }
      }
    },
    storeSelectedData(selectedData) {
      this.selectedTableData = selectedData
    },
    systemShutdown() {
      //API shutdown call to all nodes
      //let oldSelected = this.selectedTableData

      this.$emit("panicReset","PanicReset")
    },
    checkNodeStatus() {
      for(let indexOuter = 0; indexOuter < this.availableNodesData.length; indexOuter++) {
        let baseNode = this.availableNodesData[indexOuter]
        let liveness = false
        for(let indexInner = 0; indexInner < this.currentNodesData.length; indexInner++) {
          let liveNode = this.currentNodesData[indexInner].hostname
          if(baseNode === liveNode) {
            this.tableData[indexOuter].status = 'Up'
            this.tableData[indexOuter].ip_address = this.currentNodesData[indexInner].ip_address
            liveness = true
            break;
          }
        }
        if(!liveness)
          this.tableData[indexOuter].status = 'Down'
      }
    },
    evaluateButtonEvents(buttonLabel) {
        this.closeActiveMessage();
        this.activeMessage = buttonLabel;

        switch(this.activeMessage) {
            case 'Details':
                if (!(this.currentHostName === '') && this.selectedTableData.status === 'Up')
                  this.showDetails = true;
                break;
            case 'Add New':
                this.showAddNew = true;
                break;
            case 'Power Up':
                if (!(this.currentHostName === ''))
                this.showPowerUp = true;
                break;
            case 'Power Down':
                if (!(this.currentHostName === ''))
                this.showPowerDown = true;
                break;
            case 'Reboot':
                if (!(this.currentHostName === ''))
                this.showReboot = true;
                break;
            case 'AddNewClosed':
                this.showAddNew = false;
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
