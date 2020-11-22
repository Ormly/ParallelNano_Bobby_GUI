<template>
  <div class="columns">
    <div class="column is-two-fifths">
      <h1 class="is-size-1">Nodes</h1>
      <nodes-management class="column"
        :panic="panic"
        @panicReset="panicReset">
      </nodes-management>
    </div>
    <div class="column is-two-fifths">
        <h1 class="is-size-1">Users</h1>
        <users-management class="column"/>
    </div>
    <div class="column">
        <h1 class="is-size-1">Environment</h1>
        <data-management class="column"
          @systemShutdown="systemShutdown">
        </data-management>
    </div>
  </div>
</template>

<script>
import NodesManagement from "@/components/nodes/nodes-management";
import UsersManagement from "@/components/users/users-management";
import DataManagement from "@/components/environment/data-management";
/*
 * Top component which holds all management components. Also serves as a relay point for the panic signal (not fully implemented at this stage).
 */
export default {
name: "top-component",
  components: {DataManagement, NodesManagement, UsersManagement},
  data() {
    return {
      panic: false
    }
  },
  methods: {
    systemShutdown() {
      this.panic = true
    },
    panicReset() {
      this.panic = false
    }
  }
}
</script>

<style scoped>

</style>
