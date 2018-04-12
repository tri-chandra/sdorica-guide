<template>
  <div>
    <p>Hey, add your first guide!</p>
    <v-btn @click="add">Add</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    guideList() {

    }
  },
  methods: {
    add() {
      this.$store.dispatch('addNewGuide',
      {
        title:'TEST',
        description: 'Description'
      })
    }
  }
}
</script>
