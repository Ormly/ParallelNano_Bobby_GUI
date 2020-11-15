<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <h1 class="is-size-1">Nodes</h1>
      <nodes-management class="column"/>
    </div>
    <div class="column is-two-fifths">
        <h1 class="is-size-1">Users</h1>
        <users-management class="column"/>
    </div>
    <div class="column">
        <h1 class="is-size-1">Environment</h1>
        <data-management
            :humidity-data="humidityData"
            :temperature-data="temperatureData"
            class="column"></data-management>
    </div>
  </div>
</template>

<script>
import NodesManagement from "@/components/nodes/nodes-management";
import UsersManagement from "@/components/users/users-management";
import DataManagement from "@/components/environment/data-management";
export default {
name: "top-component",
  components: {DataManagement, NodesManagement, UsersManagement},
    data() {
        return {
            humidityData: "63%",
            temperatureData: "45C°"
        }
    }
}
</script>

<style scoped>

</style>
