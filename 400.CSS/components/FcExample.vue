<template>
    <button @click="type = 'overflow'" class="custom-button">使用overflow创建BFC</button>
    <button @click="type = 'flow-root'" class="custom-button">使用flow-root创建BFC</button>
    <button @click="type = ''" class="custom-button">重置</button>
    <div class="box" :style="inlineStyle">
        <div class="float">I am a floated box!</div>
        <div class="box-shadow">I am content inside the container.</div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const type = ref('');
const inlineStyle = computed(() => {
    if (!type.value) return ''
    return type.value === 'overflow' ? 'overflow: hidden;' : 'display: flow-root;'
})
</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.box {
    background-color: rgb(224 206 247);
    font: 1.2em sans-serif;
}

.float {
    float: left;
    width: 200px;
    height: 200px;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
}

.box-shadow {
    height: 100px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
}

.custom-button {
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 14px;
}
</style>