<template>
<div class="container">
  <div>
    <div class="row">
      <div class="col-md-4 search-baby-name">
        <h1>{{  $t('welcome') }}</h1>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {

  data() {
    return {
      jokes: [],
      ngjyra: ''
    }
  },

  methods: {
    async nonVuexSubmit() {

      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

        const url = `https://icanhazdadjoke.com/search`;

        await this.$axios.get(url, config)
        .then((response) => {
          this.jokes = response.data.results;
          console.log('jokes --> ', this.jokes);
        })
        .catch( (error) => {
          console.log('nope', error);
        });
    },

  }

}

</script>
