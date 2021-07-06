<template>
  <div class="h-popup" v-if="value">
    <div class="h-popup__mask">
      <div class="h-popup__window">
        <div class="h-popup__close" @click="$emit('input', !value)">X</div>
        <div class="h-popup__box">
          <slot name="title"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  scoped>
.h-popup__mask {
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.37);
  position: relative;
}
.h-popup__window {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  background: #fff;
}
.h-popup__close {
  float: right;
  margin: 10px;
  cursor: pointer;
}
.h-popup__box {
  margin-top: 50px;
  padding: 10px;
}
</style>