<template>
<div>
  <h1>{{localGuide.title}}</h1>

  <char-avatar v-model="localGuide.team.gold" />
  <char-avatar v-model="localGuide.team.white" />
  <char-avatar v-model="localGuide.team.black" />
  <char-avatar v-model="localGuide.team.advisor" />
  <char-avatar v-model="localGuide.team.guildAdvisor" />

  <p>{{localGuide.description}}</p>

  <h2>Stages</h2>
  <v-card v-for="(item, idx) in localGuide.stages" :key="idx">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{`Stage ${idx + 1}/${localGuide.stages.length}`}}</h3>
        <div>{{item.note}}</div>
      </div>
    </v-card-title>
  </v-card>

  <h2>closing Note</h2>
  <p>{{localGuide.closingNote}}</p>
</div>
</template>

<script>
import CharAvatar from '@/components/guide/CharAvatar'
import CharList from '@/model/characters'

export default {
  name: 'PreviewPage',
  components: { CharAvatar },
  props: ['id'],
  data() {
    return {
      localGuide: {
        team: {
          gold: {},
          black: {},
          white: {},
          advisor: {},
          guildAdvisor: {}
        },
        stages: [],
        description: '',
        id: '',
        isPublic: false,
        ownerId: '',
        title: ''
      }
    }
  },
  computed: {
    guide() {
      return this.$store.getters.selectedGuide
    }
  },
  watch: {
    guide(val) {
      if (val) {
        this.localGuide = val
        this.localGuide.team.gold = CharList.findCharacter(val.team.gold.char)
        this.localGuide.team.black = CharList.findCharacter(val.team.black.char)
        this.localGuide.team.white = CharList.findCharacter(val.team.white.char)
        this.localGuide.team.advisor = CharList.findCharacter(val.team.advisor.char)
        this.localGuide.team.guildAdvisor = CharList.findCharacter(val.team.guildAdvisor.char)
      }
    }
  },
  mounted() {
    this.$store.dispatch('getSelectedGuide', this.id)
  }
}
</script>

<style scoped>
h2 {
  padding-top: 20px;
}
</style>
