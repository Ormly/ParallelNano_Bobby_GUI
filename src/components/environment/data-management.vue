<!--suppress ALL -->
<template>
    <div>
      <div class="columns">
        <div class="column is-two-thirds">
          <data-display
              :icon-name="temperatureIcon.icon"
              :icon-size="temperatureIcon.size"
              parameter-sign="°C"
              :current-data-state="currentTemperature">
          </data-display>
          <br/>
          <data-display
              :icon-name="humidityIcon.icon"
              :icon-size="humidityIcon.size"
              parameter-sign="%"
              :current-data-state="currentHumidity">
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
      <data-warning-message
        :alert="panic"
        v-if="showPanic"
        @panicClosed="evaluateEvents"
        @systemShutdown="systemShutdown">
      </data-warning-message>
    </div>
</template>

<script>
import {APIFactory} from "@/lighthouse-connection/APIFactory";
const environmentAPI = APIFactory.get("environment");

import DataDisplay from "@/components/environment/data-display";
import BaseButton from "@/components/base-components/base-button";
import DataThresholdMessage from "@/components/environment/messages/data-threshold-message";
import DataWarningMessage from "@/components/environment/messages/data-warning-message";
/*
 * Manages "Data" section of the GUI. Responsible for housing data display and relevant messages.
 */
export default {
name: "data-management",
    components: {DataWarningMessage, DataThresholdMessage, DataDisplay, BaseButton},
    created() {
      this.fetchEnvironmentData()
      this.pollAPI()
    },
    data() {
        return {
            polling: null,
            isLoading: false,
            panic: false,
            showPanic: false,

            rawEnvironmentData: {},

            temperatureThreshold: 90,
            humidityThreshold: 60,

            currentTemperature: null,
            currentHumidity: null,

            temperatureIcon: {
                'icon': 'thermometer',
                'size': 'is-large'
            },
            humidityIcon: {
                'icon': 'water-percent',
                'size': 'is-large'
            },

            //currently shown message
            activeMessage: String,
            showSettings: false
        }
    },
    watch: {
      currentTemperature: function() {
        if(this.currentTemperature >= this.temperatureThreshold) {
          this.panic = true
          this.showPanic = this.panic
        }
      },
      currentHumidity: function() {
        if(this.currentHumidity >= this.humidityThreshold) {
          this.panic = true
          this.showPanic = this.panic
        }
      }
    },
    methods: {
      async fetchEnvironmentData() {
        this.isLoading = true
        this.rawEnvironmentData = await environmentAPI.getEnvironmentData()
        this.isLoading = false

        this.setCurrentEnvironmentValues()
      },
      setCurrentEnvironmentValues() {
        this.currentTemperature = Math.trunc(this.rawEnvironmentData.current_temperature)
        this.currentHumidity =  Math.trunc(this.rawEnvironmentData.current_humidity)
      },
      //Polls every 10 seconds
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
          case 'PanicClosed':
            this.showPanic = false;
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
      },
      systemShutdown() {
        //Propagate panic event.
        this.$emit("systemShutdown", "SystemShutdown")
        this.panic = false
      }
    },
    beforeDestroy() {
        clearInterval(this.polling)
    }
}
</script>

<style scoped>

</style>
