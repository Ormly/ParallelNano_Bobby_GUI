<!--suppress ALL -->
<template>
    <div>
      <div class="columns">
        <div class="column is-two-thirds">
          <data-display
              :icon-name="temperatureIcon.icon"
              :icon-size="temperatureIcon.size"
              parameter-sign="°C"
              :current-data-state="rawEnvironmentData.temperature">
          </data-display>
          <br/>
          <data-display
              :icon-name="humidityIcon.icon"
              :icon-size="humidityIcon.size"
              parameter-sign="%"
              :current-data-state="rawEnvironmentData.humidity">
          </data-display>
        </div>
      </div>
      <base-button
        icon="cog"
        size="is-normal"
        type="is-primary"
        label="Settings"
        @base-button-clicked="evaluateEvents">
      </base-button>
      <br/>
      <br/>
      <data-threshold-message
          v-if="showSettings"
          @settingsClosed="evaluateEvents"
          @settingsChanged="changeThresholds">
      </data-threshold-message>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const environmentAPI = APIFactory.get("environment");

import DataDisplay from "@/components/environment/data-display";
import BaseButton from "@/components/base-components/base-button";
import DataThresholdMessage from "@/components/environment/data-threshold-message";
export default {
name: "data-management",
    components: {DataThresholdMessage, DataDisplay, BaseButton},
    created() {
      this.fetchEnvironmentData()
      //this.pollAPI()
    },
    data() {
        return {
            polling: null,
            isLoading: false,

            rawEnvironmentData: {},

            temperatureThreshold: 90,
            humidityThreshold: 60,

            temperatureIcon: {
                'icon': 'thermometer',
                'size': 'is-large'
            },
            humidityIcon: {
                'icon': 'water-percent',
                'size': 'is-large'
            },

            activeMessage: String,
            showSettings: false
        }
    },
    methods: {
      async fetchEnvironmentData() {
        this.isLoading = true
        this.rawEnvironmentData = await environmentAPI.getEnvironmentData()
        this.isLoading = false
      },
      pollAPI () {
        this.polling = setInterval(() => {
          this.fetchEnvironmentData()
        }, 10000)
      },
      evaluateEvents(payload) {
        this.closeActiveMessages();
        let temp = this.activeMessage
        this.activeMessage = payload;

        switch(payload) {
          case 'Settings':
            if(temp === payload) {
              this.showSettings = false
              this.activeMessage = ''
            }
            else
              this.showSettings = true
            break;
          case 'SettingsClosed':
            this.showSettings = false;
            break;
        }
      },
      closeActiveMessages() {
        switch(this.activeMessage) {
          case 'Settings':
            this.showSettings = false;
            break;
        }
      },
      changeThresholds(thresholds) {
        this.temperatureThreshold = parseInt(thresholds[0]);
        this.humidityThreshold = parseInt(thresholds[1]);

        this.closeActiveMessages()
      }
    },
    beforeDestroy() {
        clearInterval(this.polling)
    }
}
</script>

<style scoped>

</style>
