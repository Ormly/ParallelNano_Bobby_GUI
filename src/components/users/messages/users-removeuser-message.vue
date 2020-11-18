<template>
  <b-message title="Remove User" type="is-warning" size="is-large" @close="messageClosed">
    <h1 class="is-size-3">Are you sure you want to remove User <strong>{{userToRemove}}</strong> ?</h1>
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
export default {
name: "users-removeuser-message",
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
      this.$emit("removeClosed", "RemoveClosed");
    },
    evaluateButtonClick(buttonLabel) {
      switch(buttonLabel) {
        case('Confirm'):
          this.submitData()
          break;
        case('Cancel'):
          this.messageClosed();
          break;
      }
    },
    submitData() {
      this.$emit("removeUser","RemoveUser")
    }
  },
  props: {
    userToRemove: String
  }
}
</script>

<style scoped>

</style>
