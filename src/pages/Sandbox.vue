<template>
<div>
  <monster-card v-model="model" />
</div>
</template>

<script>
import MonsterCard from '@/components/guide/MonsterCard'

export default {
  components: { MonsterCard },
  data() {
    return {
      model: {
        monsters: [],
        note: ''
      }
    }
  },
  methods: {

  }
}
</script>
