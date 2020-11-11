<template>
    <div class="box">
        <h1 class="is-size-2"><strong>Details</strong></h1>
        <br/>
        <p><strong>Hostname: </strong>{{hostName}}</p>
        <br/>
        <p><strong>CPU Type: </strong>{{cpuType}}</p>
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
export default {
name: "nodes-details-view",
    props: {
        hostName: String,
        cpuType: String,
        cpuUsage: String,
        ipAddress: String,
        memoryUsage: String,
        platform: String
    }
}
</script>

<style scoped>

</style>