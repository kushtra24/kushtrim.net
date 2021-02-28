<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <logo width="50px" height="50px"/>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link v-if="$auth.loggedIn" :to="localePath('/admin/dashboard')">{{ $t('dashboard') }}</nuxt-link>
            <b-nav-item to="articles">Articles</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
<!--            <b-nav-form>-->
<!--              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--            </b-nav-form>-->
            <b-nav-item> <nuxt-link class="language-switcher"
                                    v-for="locale in availableLocales"
                                    :key="locale.code"
                                    :to="switchLocalePath(locale.code)">
              {{ locale.name }}</nuxt-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <font-awesome-icon far icon="user-circle" />
                <em v-if="$auth.loggedIn">{{ $auth.user.name }}</em>
                <em v-if="!$auth.loggedIn">User</em>
              </template>
              <template v-if="!$auth.loggedIn">
              <b-dropdown-item to="/auth/login">Login</b-dropdown-item>
              <b-dropdown-item to="/auth/register">register</b-dropdown-item>
              </template>
              <template v-if="$auth.loggedIn">
                <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                <b-dropdown-item href="/auth/logout" @click.prevent="logout()">Sign Out</b-dropdown-item>
              </template>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  data(){
    return {
    }
  },

  methods: {
    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        console.log(err);
      }
    }
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }

}
</script>

<style>
  .language-switcher {
    color: White;
  }

  .language-switcher:hover {
    color: #eee;
    text-decoration: none;
  }
</style>
