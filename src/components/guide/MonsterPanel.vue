<template>
<div>
  <v-avatar>
    <img src="/static/avatar/figure_none.png" />
  </v-avatar>
  <v-text-field v-model="monster.name" label="Name" />
  <v-layout>
    <v-flex xs6><v-text-field v-model="monster.hp" label="HP" /></v-flex>/
    <v-flex xs6><v-text-field v-model="monster.fullHp" label="HP" /></v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs6><v-text-field v-model="monster.armor" label="Armor" /></v-flex>/
    <v-flex xs6><v-text-field v-model="monster.fullArmor" label="Armor" /></v-flex>
  </v-layout>
  <div v-for="(item, idx) in monster.skills" :key="idx">
    {{item.code}} - {{item.note}}
  </div>

  <v-select
    v-model="selectedSkill"
    :items="items"
    label="Select a skill..."
  >
  </v-select>
  <v-text-field
    v-model="skillNote"
    multi-line
    label="Additional skill note"
  ></v-text-field>

  <v-btn small fab @click="addSkill"><v-icon>add</v-icon></v-btn>
</div>
</template>

<script>
import { Aura, Onhit, Immunity } from '@/model/SkillType'

export default {
  name: 'MonsterPanel',
  data() {
    return {
      items: [
        Aura, Onhit, Immunity
      ],
      monster: {
        name: '',
        portrait: '',
        fullHp: 0,
        hp: 0,
        fullArmor: 0,
        armor: 0,
        skills: [

        ]
      },
      skillNote: '',
      selectedSkill: ''
    }
  },
  methods: {
    addSkill() {
      this.monster.skills.push({
        code: this.selectedSkill,
        note: this.skillNote
      })
    }
  }
}
</script>
