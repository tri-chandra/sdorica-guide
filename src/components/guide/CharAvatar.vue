<template>
<v-avatar
  :size="size"
  @mouseenter="$emit('mouseenter', '')">
  <img :src="value.portrait" :alt="value.name" />
</v-avatar>
</template>

<script>
export default {
  name: 'CharAvatar',
  props: {
    value: {
      type: [Object, String],
      default: {
        name: '',
        portrait: ''
      }
    },
    size: {
      type: Number,
      default: 84
    }
  },
  watch: {
    value(val) {

    }
  }
}
</script>
