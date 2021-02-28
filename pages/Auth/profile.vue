<template>
  <div class="middle-container">
    <div class="form-signin">
      <form @submit.prevent="resetPassword()">
        <!-- <p class="error-message">{{  errorMessage }}</p> -->
        <p class="alert alert-danger" v-if="errorMessage">Wrong Credentials</p>
        <h1 class="h3 mb-3 font-weight-normal">Forgot your password?</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" v-model="email" @focus="hideErrorMessage" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blank',
    name: "forgotPassword",
    data() {
      return {
        email: '',
        errorMessage: ''
      }
    },

    methods: {
      async resetPassword() {
        await this.$axios.get('/sanctum/csrf-cookie');
        await  this.$axios.post('api/forgot', {email: this.email})
          .then(() => {
            this.$router.push('resetPassword');
          })
      },
      hideErrorMessage() {
        this.errorMessage = false;
      }
    }
  }
</script>

<style scoped>

</style>
