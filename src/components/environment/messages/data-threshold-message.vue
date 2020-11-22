<template>
  <b-message title="Change Environmental Thresholds" size="is-medium" @close="messageClosed">
    <div class="columns">
      <div class="column is-one-half">
        <div>
          <b-field label="Temperature">
            <b-input maxlength="2" v-model="inputDataTemperature" style="width: 25%"></b-input>
          </b-field>
          <b-field label="Humidity">
            <b-input maxlength="2" v-model="inputDataHumidity" style="width: 25%"></b-input>
          </b-field>
        </div>
      </div>
    </div>
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
 * A message which allows the user to input new temperature/humidity thresholds.
 */
export default {
name: "data-threshold-message",
  components: {YesNoButtonContainer},
  data() {
    return {
      inputDataTemperature: '',
      inputDataHumidity: '',
      submissionData: [],

      buttonData: [
        {'label':'Confirm', 'size':'is-large', 'type':'is-success'},
        {'label':'Cancel', 'size':'is-large', 'type':'is-danger'}
      ]
    }
  },
  methods: {
    evaluateButtonClick(buttonLabel) {
      switch(buttonLabel) {
        case('Confirm'):
          this.submitData();
          break;
        case('Cancel'):
          this.messageClosed();
          break;
      }
    },
    submitData() {
      this.submissionData.push(this.inputDataTemperature, this.inputDataHumidity)
      //Fire when the thresholds haven been input.
      //@args The payload is the new threshold data.
      this.$emit("settingsChanged", this.submissionData);
    },
    messageClosed() {
      //Fire when the message is closed.
      this.$emit("settingsClosed", "SettingsClosed");
    }
  }
}
</script>

<style scoped>

</style>
