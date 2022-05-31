<script setup>
import FilmComponent from '@/components/FilmComponent.vue'
</script>


<template>
  <main>

    <div v-if="loading">
      <h1>loading...</h1>
    </div>
    <div v-else class="wrapper" v-bind:key="i" v-for="(item, i) in films">
      <FilmComponent :value="item" />
    </div>


  </main>
</template>


<script>
import API from '@/constant/api'

export default {
  name: 'Films',
  data() {
    return {
      films: [],
      loading: false,
    }
  },
  methods: {
    open() { },
  },
  async created() {
    console.log('start');

    this.loading = true;
    await API.get('films').then(res => {
      if (res.status === 200) {
        this.films = res.data.results;
      }
      this.loading = false;
    }).catch(err => {
      console.log(err);
      this.loading = false;
    });
  },
  computed: {},
  components: {}
}
</script>
