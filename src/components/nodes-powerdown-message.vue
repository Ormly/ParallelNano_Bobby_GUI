<template>
  <b-message :title="messageTitle" size="is-large" @close="messageClosed">
    <div class="block">
      <b-radio v-model="radio"
               native-value="Power Down immediately"
               @input="evaluatePowerDownRadio">
        Power Down immediately
      </b-radio>
      <br/>
      <b-radio v-model="radio"
               native-value="Power Down in X Minutes"
               @input="evaluatePowerDownRadio">
        Power Down in X Minutes
      </b-radio>
    </div>
    <div v-if="showInput" class="container">
      <span class="columns"><b-input size="is-medium" v-model="inputData" class="column is-one-fifth"></b-input>
      <span class="column">Minutes from now</span></span>
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
      messageTitle: "Power Down " + this.nodeToPowerDown,
      radio: String,
      inputData: '',
      showInput: false,
      minutesUntilPowerDown: Number
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
    },
    evaluatePowerDownRadio() {
      switch(this.radio) {
        case 'Power Down immediately':
          this.showInput = false;
          break;
        case 'Power Down in X Minutes':
          this.showInput = true;
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
