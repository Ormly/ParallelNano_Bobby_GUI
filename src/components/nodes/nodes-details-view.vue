<template>
    <div class="box">
        <nav class="level">
          <h1 class="is-size-2 level-left">
            Details
          </h1>
          <a class="delete is-medium level-right" @click="viewClosed"></a>
        </nav>
        <p><strong>Hostname: </strong>{{hostName}}</p>
        <br/>
        <p><strong>CPU Type: </strong>{{cpuType}}</p>
        <br/>
        <p><strong>GPU Type: </strong>{{gpuType}}</p>
        <br/>
        <p><strong>CPU Usage: </strong>{{cpuUsage}}</p>
        <br/>
        <p><strong>IP Address: </strong>{{ipAddress}}</p>
        <br/>
        <p><strong>Memory Usage: </strong>{{memoryUsage}}</p>
        <br/>
        <p><strong>Platform: </strong>{{platform}}</p>
    </div>
</template>

<script>
/*
 * A info box displaying data specific to a selected node.
 */
export default {
name: "nodes-details-view",
    props: {
        hostName: String,
        cpuType: String,
        gpuType: String,
        cpuUsage: String,
        ipAddress: String,
        memoryUsage: String,
        platform: String
    },
  methods: {
    viewClosed() {
      //Fire when the message is closed.
      this.$emit("detailsClosed", "DetailsClosed");
    }
  }
}
</script>

<style scoped>

</style>
