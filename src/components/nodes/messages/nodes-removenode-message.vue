<template>
    <b-message title="Remove Node" type="is-warning" size="is-large" @close="messageClosed">
      <h1 class="is-size-3">Are you sure you want to remove Node <strong>{{nodeToRemove}}</strong> ?</h1>
        <br/>
        <yes-no-button-container
            :button-data="buttonData"
            :key="buttonData.label"
            @button-clicked="evaluateButtonClick">
        </yes-no-button-container>
    </b-message>
</template>

<script>
import YesNoButtonContainer from "@/components/base-components/base-yes-no-button-container";
/*
 * [NOT IMPLEMENTED] A message which asks for user input regarding removing a selected node.
 */
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
    methods: {
        messageClosed() {
            //Fire when the message is closed.
            this.$emit("removeClosed", "RemoveClosed");
        },
        evaluateButtonClick(buttonLabel) {
          switch(buttonLabel) {
            case('Confirm'):
            case('Cancel'):
              this.messageClosed();
              break;
          }
        }
    },
    props: {
        nodeToRemove: String
    }
}
</script>

<style scoped>

</style>
