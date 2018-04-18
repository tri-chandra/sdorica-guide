<template>
<v-card>
  <v-layout row wrap>
    <v-flex xs4 v-for="(monster, idx) in stage.monsters" :key="idx">
      <monster-panel v-model="stage.monsters[idx]" />
    </v-flex>
    <v-flex>
      <v-btn @click="addMonster"><v-icon>add</v-icon></v-btn>
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
  },
  methods: {
    addMonster() {
      this.stage.monsters.push({})
    }
  }
}
</script>
