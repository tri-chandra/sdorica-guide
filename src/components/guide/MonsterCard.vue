<template>
<v-card>
  <v-card-title primary-title>
    <h3 class="headline mb-0">{{title}}</h3>
    <v-btn fab small color="pink" @click="$emit('delete')"><v-icon>delete</v-icon></v-btn>
  </v-card-title>
  <v-layout row wrap>
    <v-flex xs4 v-for="(monster, idx) in stage.monsters" :key="idx">
      <monster-panel v-model="stage.monsters[idx]" />
    </v-flex>
    <v-flex>
      <v-btn @click="addMonster">add a Monster</v-btn>
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
  props: ['value', 'title'],
  data() {
    return {
      stage: {
        monsters: [],
        note: ''
      }
    }
  },
  watch: {
    value(val) {
      this.stage = val
    },
    stage(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    addMonster() {
      this.stage.monsters.push({
        name: '',
        portrait: '',
        fullHp: 0,
        hp: 0,
        fullArmor: 0,
        armor: 0,
        skills: [

        ]
      })
    }
  },
  mounted() {
    if (this.value) {
      this.stage = this.value
    }
  }
}
</script>
