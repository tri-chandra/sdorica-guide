<template>
<div>
  <v-avatar>
    <img src="/static/avatar/figure_none.png" />
  </v-avatar>
  <v-text-field label="Name" />
  <v-text-field label="HP" />
  <v-text-field label="Armor" />

  <v-select
    :items="items"
    label="Select a skill..."
  >
  </v-select>
  <v-text-field
    multi-line
    label="Additional skill note"
  ></v-text-field>

  <v-btn small fab><v-icon>add</v-icon></v-btn>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'Aura',
        'On-hit',
        'True damage',
        'On-attack'
      ]
    }
  }
}
</script>
