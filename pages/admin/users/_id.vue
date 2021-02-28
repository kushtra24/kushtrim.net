<template>
  <div>
    <nuxt-child :user="user"></nuxt-child>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    layout: 'adminPanel',
    middleware: 'admin',
    data() {
      return {
        id: this.$route.params.id,
      }
    },

    computed: {
      ...mapGetters({
        user: 'users/user'
      })
    },

    async fetch(context) {
        await context.store.dispatch('users/fetch_user', context.params.id);
    },



  }
</script>

<style scoped>

</style>
