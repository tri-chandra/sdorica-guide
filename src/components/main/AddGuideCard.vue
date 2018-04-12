<template>
  <v-card>
    <v-card-title>
      Add a guide!
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          label="Title"></v-text-field>
        <v-text-field
          v-model="description"
          multi-line
          label="Description"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn flat color="orange" @click="onAdd">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'AddGuideCard',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    onAdd() {
      this.$emit(
        'submitted',
        {
          title: this.title,
          description: this.description
        }
      )
    }
  }
}
</script>
