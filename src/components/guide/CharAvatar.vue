<template>
<v-avatar :size="size">
  <img :src="value.portrait" :alt="value.name" />
</v-avatar>
</template>

<script>
export default {
  name: 'CharAvatar',
  props: {
    value: {
      type: [Object, String],
      default() {
        return {
          name: '',
          portrait: '/static/avatar/figure_none.png'
        }
      }
    },
    size: {
      type: Number,
      default: 84
    }
  }
}
</script>
