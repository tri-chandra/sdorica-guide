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
    <v-avatar :size="24"><img :src="item.code.portrait" /></v-avatar>
    &nbsp;{{item.note}}
  </div>

  <v-select
    v-model="selectedSkill"
    :items="items"
    label="Select a skill..."
  >
    <template slot="selection" slot-scope="data">
      <v-avatar :size="24"><img :src="data.item.portrait" /></v-avatar>
      &nbsp;{{data.item.text}}
    </template>

    <template slot="item" slot-scope="data">
      <v-avatar :size="24"><img :src="data.item.portrait" /></v-avatar>
      &nbsp;{{data.item.text}}
    </template>
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
import {
  Aura, Onhit, Immunity, Ondeath, Onattack,
  Blockchange, Blockremove, Buff, Debuff,
  Cure, Onallydeath
} from '@/model/SkillType'

export default {
  name: 'MonsterPanel',
  props: ['value'],
  data() {
    return {
      items: [
        Aura, Onhit, Immunity, Ondeath, Onattack,
        Blockchange, Blockremove, Buff, Debuff,
        Cure, Onallydeath
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
  watch: {
    value(val) {
      this.monster = val
    },
    monster(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    addSkill() {
      this.monster.skills.push({
        code: this.selectedSkill,
        note: this.skillNote
      })
    }
  },
  mounted() {
    if (this.value) {
      this.monster = this.value
    }
  }
}
</script>
