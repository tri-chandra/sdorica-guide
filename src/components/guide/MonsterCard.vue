<template>
<v-card>
  <v-layout row wrap>
    <v-flex xs4>
      <monster-panel />
    </v-flex>
    <v-flex>
      <v-btn><v-icon>add</v-icon></v-btn>
    </v-flex>
  </v-layout>
  <v-text-field
    v-model="stage.note"
    multi-line
    label="Stage Note"
  ></v-text-field>
</v-card>
</template>

<script>
import MonsterPanel from '@/components/guide/MonsterPanel'

export default {
  name: 'MonsterCard',
  components: { MonsterPanel },
  data() {
    return {
      stage: {
        monsters: [],
        note: ''
      }
    }
  }
}
</script>
