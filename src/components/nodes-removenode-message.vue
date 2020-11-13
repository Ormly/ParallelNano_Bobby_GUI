<template>
    <b-message title="Remove Node" type="is-warning" size="is-large">
        <h1 class="is-size-3">Are you sure you want to remove Node {{nodeToRemove}}</h1>
        <br/>
        <yes-no-button-container
            :button-data="buttonData">
        </yes-no-button-container>
    </b-message>
</template>

<script>
import YesNoButtonContainer from "@/components/yes-no-button-container";
export default {
name: "nodes-removenode-message",
    components: {YesNoButtonContainer},
    data() {
        return {
            buttonData: [
                {'label':'Confirm', 'size':'is-large', 'type':'is-success'},
                {'label':'Cancel', 'size':'is-large', 'type':'is-danger'}
            ]
        }
    },
    props: {
        nodeToRemove: String
    }
}
</script>

<style scoped>

</style>