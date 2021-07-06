<template>
  <div class="index">
    <h-popup v-model="isShowPopup">
      <template #title>
        <div class="index__title">title</div>
      </template>
      <template #content>
        <div class="index__content">content</div>
      </template>
    </h-popup>
    <div class="index__box">
      <div class="index__button" @click="isShowPopup = true">open popup</div>
      <div class="index__counter-box">
        <div class="index__counter-number">{{ number }}</div>
        <div class="index__button" @click="counter">counter</div>
      </div>
    </div>
  </div>
</template>

<script>
import HPopup from "../components/HPopup.vue";
export default {
  components: { HPopup },
  data() {
    return {
      isShowPopup: false,
    };
  },
  methods: {
    counter() {
      this.$store.commit("counter/changeNumber", this.number + 1);
    },
  },
  computed: {
    number() {
      return this.$store.getters["counter/newNumber"];
    },
  },
};
</script>
<style >
body {
  margin: 0;
}
.index__title {
  text-align: center;
  font-size: 20px;
}
.index__box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.index__button {
  border: 1px solid;
  padding: 5px;
  margin: 5px;
  text-align: center;
  cursor: pointer;
}
.index__counter-box {
  padding: 10px;
}
</style>
