<template>
  <v-list-tile @click.stop="$emit('click')" class="item">
    <v-list-tile-content>
      <v-list-tile-title>
        {{value.title}}
        <v-avatar :size="24">
          <img :src="goldPortrait" />
        </v-avatar>
        <v-avatar :size="24">
          <img :src="blackPortrait" />
        </v-avatar>
        <v-avatar :size="24">
          <img :src="whitePortrait" />
        </v-avatar>
        <v-avatar :size="24">
          <img :src="advisorPortrait" />
        </v-avatar>
        <v-avatar :size="24">
          <img :src="guildPortrait" />
        </v-avatar> - {{value.turns}} Turns
      </v-list-tile-title>
      <v-list-tile-sub-title>
        {{value.description}}
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import CharList from '@/model/characters'

export default {
  name: 'GuideListItem',
  props: {
    value: Object
  },
  computed: {
    goldPortrait() {
      const chara = CharList.findCharacter(this.value.team.gold.char)
      return chara ? chara.portrait : '/static/avatar/figure_none.png'
    },
    blackPortrait() {
      const chara = CharList.findCharacter(this.value.team.black.char)
      return chara ? chara.portrait : '/static/avatar/figure_none.png'
    },
    whitePortrait() {
      const chara = CharList.findCharacter(this.value.team.white.char)
      return chara ? chara.portrait : '/static/avatar/figure_none.png'
    },
    advisorPortrait() {
      const chara = CharList.findCharacter(this.value.team.advisor.char)
      return chara ? chara.portrait : '/static/avatar/figure_none.png'
    },
    guildPortrait() {
      const chara = CharList.findCharacter(this.value.team.guildAdvisor.char)
      return chara ? chara.portrait : '/static/avatar/figure_none.png'
    },
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
