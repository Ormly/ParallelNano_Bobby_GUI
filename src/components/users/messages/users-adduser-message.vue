<template>
  <b-message title="Add New User" size="is-large" @close="messageClosed">
    <div class="columns">
      <div class="column is-two-thirds">
        <b-field>
          <b-input size="is-medium" placeholder="Username" maxlength="30" v-model="inputDataUsername"></b-input>
        </b-field>
        <div class="block">
          <b-radio v-model="radio"
                   native-value="Admin"
                   @input="evaluatePowerDownRadio">
            Admin
          </b-radio>
          <br/>
          <b-radio v-model="radio"
                   native-value="User"
                   @input="evaluatePowerDownRadio">
            User
          </b-radio>
        </div>
        <b-field>
          <b-input type="password" size="is-medium" placeholder="Password" maxlength="30" v-model="inputDataPassword" password-reveal></b-input>
        </b-field>
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
 * A message which asks the user for input in order to add a new user to the system.
 */
export default {
name: "users-adduser-message",
  components: {YesNoButtonContainer},
  data() {
    return {
      inputDataUsername: '',
      inputDataPassword: '',
      inputUserType: '',
      submissionData: [],

      radio: String,

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
    evaluatePowerDownRadio() {
      switch(this.radio) {
        case 'User':
          this.inputUserType = 'user'
          break;
        case 'Admin':
          this.inputUserType = 'admin'
          break;
      }
    },
    submitData() {
      this.submissionData.push(this.inputDataUsername, this.inputDataPassword, this.inputUserType)
      //Fire when new user is supposed to be added
      //@args payload carries data regarding user to be added
      this.$emit("addNewUser", this.submissionData);
    },
    messageClosed() {
      //Fire when message is closed
      this.$emit("addNewClosed", "AddNewClosed");
    }
  }
}
</script>

<style scoped>

</style>
