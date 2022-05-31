<template>
  <main>
    <div>
      <div class="button" @click="flag = !flag">
        <h3>{{ value.name }}</h3>
        <svg :style="!flag ? '    transform: rotate(0deg)' : '    transform: rotate(180deg)'" width="16" height="10"
          viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.28571 -2.45267e-07L8 6.25L13.7143 7.53851e-07L16 1.25L8 10L7.34202e-07 1.25L2.28571 -2.45267e-07Z"
            fill="#BDBDBD" />
        </svg>
      </div>


      <div class="answer" :class="{ isActive: flag, unActive: !flag }">
        <p><strong>model:</strong> {{ value.model }}</p>
        <p><strong>manufacturer:</strong> {{ value.manufacturer }}</p>
        <p><strong>cost_in_credits:</strong> {{ value.cost_in_credits }}</p>
        <p><strong>length:</strong> {{ value.length }}</p>
        <p><strong>max_atmosphering_speed:</strong> {{ value.max_atmosphering_speed }}</p>
        <p><strong>crew:</strong> {{ value.crew }}</p>
      </div>

    </div>

  </main>

</template>

<script>
export default {
  props: {
    value: {
      name: '',
      model: '',
    },
  },
  methods: {},
  data() {
    return {
      flag: false,
    };
  },
};



</script>
<style scoped>
.button {
  flex: 1;
  font-size: 14px;
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: grey;
  /* cursor: pointer; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

}

.isActive {
  font-size: 14px;
  opacity: 1;
  margin-top: 17px;
}

.unActive {
  font-size: 0 !important;
  opacity: 0;
  margin-top: 0 !important;
}

.answer {
  transition: all 0.3s ease-in-out;
  margin-top: 17px;
  font-size: 14px;
}
</style>
