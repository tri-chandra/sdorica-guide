<template>
<v-avatar>
  <img :src="`/static/ui/skillbg${bg}.png`" class="skillbg" />
  <img :src="`/static/ui/skill${icon}.png`" class="skillicon" />
</v-avatar>
</template>

<script>
export default {
  props: ['icon', 'bg']
}
</script>

<style scoped>
.skillbg {
  position: relative;
  top: 0;
  left: 0;
}
.skillicon {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
}
</style>
