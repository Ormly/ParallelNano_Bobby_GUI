<template>
    <b-message title="Remove Node" type="is-warning" size="is-large">
        <h2 class="is-size-1">Are you sure you want to remove Node {{nodeToRemove}}</h2>
        <br/>
        <b-field>
            <b-input size="is-medium" placeholder="Node Name" v-model="inputData"></b-input>
            <p class="control">
                <b-button size="is-medium" class="button" @click="submitData" is-primary>
                    Submit
                </b-button>
            </p>
        </b-field>
    </b-message>
</template>

<script>
export default {
name: "nodes-removenode-message",
    props: {
        nodeToRemove: String
    }
}
</script>

<style scoped>

</style>