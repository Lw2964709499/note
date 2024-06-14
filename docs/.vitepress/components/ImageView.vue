<template>
  <img :src="imageMap[name]" :alt="alt" @click="visible = true" />
  <Teleport to="body">
    <div class="image-viewer" @click="visible = false" v-if="visible">
      <img class="big-preview" :src="imageMap[name]" :alt="alt" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
const images = import.meta.glob("../../images/*.{png,jpg,jpeg,gif}", {
  import: "default",
  eager: true,
});
const imageMap = Object.keys(images).reduce((acc, key) => {
  const name = key.split("/").pop() as string;
  const image = images[key];
  acc[name] = image;
  return acc;
}, {});
console.log(imageMap);
const visible = ref(false);
defineProps({
  name: {
    required: true,
    type: String,
  },
  alt: String,
});

const img = ref(null);

console.log(img.value);
</script>

<style lang="scss" scoped>
.image-viewer {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #8c8c8c;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  z-index: 200;
}
.big-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
