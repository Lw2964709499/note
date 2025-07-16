<template>
  <button class="sass-button" @click="visible = true">查看星空顶</button>
  <Teleport to="body">
    <div class="sass-demo" @click="visible = false" v-show="visible">
      <div class="sass-demo-layer1"></div>
      <div class="sass-demo-layer2"></div>
      <div class="sass-demo-layer3"></div>
      <div class="sass-demo-layer4"></div>
      <div class="sass-demo-layer5"></div>
      <div class="sass-demo-title">Sass星空顶</div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
<style lang="scss" scoped>
@use "sass:math";
@use "sass:string";
.sass-button {
  padding: 4px 8px;
  border-radius: 4px;
  border-color: transparent;
  color: rgb(60, 60, 67);
  background-color: #ebebef;
}
.sass-demo {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 222;
  top: 0;
}
.sass-demo-title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
  background: linear-gradient(white, #416b94);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

@function createShadow($n) {
  $shadow: "#{math.random(100)}vw #{math.random(100)}vh #fff";
  @for $i from 2 through $n {
    $shadow: "#{$shadow}, #{math.random(100)}vw #{math.random(100)}vh #fff";
  }
  @return string.unquote($shadow);
}
$count: 1000;
$duration: 400s;
@for $i from 1 through 5 {
  $count: math.floor(calc($count / 2));
  $duration: math.floor(calc($duration / 2));
  .sass-demo-layer#{$i} {
    $size: #{$i}px;
    position: fixed;
    width: $size;
    height: $size;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-shadow: createShadow($count);
    animation: moveUp $duration linear infinite;
    &::after {
      content: "";
      position: fixed;
      left: 0;
      top: 100vh;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      box-shadow: inherit;
    }
  }
}

@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
  }
}
</style>
