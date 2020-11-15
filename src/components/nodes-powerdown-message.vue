<template>
  <b-message :title="messageTitle" size="is-large" @close="messageClosed">
    <div class="block">
      <b-radio v-model="radio"
               native-value="Power Down immediately">
        Power Down immediately
      </b-radio>
      <b-radio v-model="radio"
               native-value="Power Down in X Minutes">
        Power Down in X Minutes
      </b-radio>
    </div>
    <br/>
    <yes-no-button-container
        :button-data="buttonData"
        :key="buttonData.label"
        @button-clicked="evaluateButtonClick">
    </yes-no-button-container>
  </b-message>
</template>

<script>
import YesNoButtonContainer from "@/components/yes-no-button-container";
export default {
name: "nodes-powerdown-message",
  components: {YesNoButtonContainer},
  data() {
    return {
      buttonData: [
        {'label':'Power Down', 'size':'is-large', 'type':'is-success'},
        {'label':'Cancel', 'size':'is-large', 'type':'is-danger'}
      ],
      messageTitle: "Power Down " + this.nodeToPowerDown
    }
  },
  methods: {
    messageClosed() {
      this.$emit("powerDownClosed", "PowerDownClosed");
    },
    evaluateButtonClick(buttonLabel) {
      switch(buttonLabel) {
        case('Power Down'):
        case('Cancel'):
          this.messageClosed();
          break;
      }
    }
  },
  props: {
    nodeToPowerDown: String
  }
}
</script>

<style scoped>

</style>
