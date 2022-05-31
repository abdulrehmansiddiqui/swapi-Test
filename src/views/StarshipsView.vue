<script setup>
import StarShipComponent from '@/components/StarShipComponent.vue'
</script>

<template>
  <main>

    <div v-if="loading">
      <h1>loading...</h1>
    </div>
    <div v-else class="wrapper" v-bind:key="i" v-for="(item, i) in starships">
      <StarShipComponent :value="item" />
    </div>


  </main>
</template>


<script>
import API from '@/constant/api'

export default {
  name: 'Starships',
  data() {
    return {
      starships: [],
      loading: false,
    }
  },
  methods: {
    open() { },
  },
  async created() {
    console.log('start');

    this.loading = true;
    await API.get('starships').then(res => {
      console.log(res.data.results, 'xxxx');
      if (res.status === 200) {
        this.starships = res.data.results;
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

<!-- <style scoped lang="scss">
.fileContainer {}
</style> -->