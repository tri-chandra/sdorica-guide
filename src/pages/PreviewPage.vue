<template>
<div>
  <h1>{{localGuide.title}}</h1>

  <v-tooltip bottom>
    <char-avatar slot="activator" v-model="localGuide.team.gold" />
    <v-card>
      <div>Level: {{localGuide.team.gold.level}}</div>
      <div>Note: {{localGuide.team.gold.note}}</div>
    </v-card>
  </v-tooltip>
  <v-tooltip bottom>
    <char-avatar slot="activator" v-model="localGuide.team.black" />
    <v-card>
      <div>Level: {{localGuide.team.black.level}}</div>
      <div>Note: {{localGuide.team.black.note}}</div>
    </v-card>
  </v-tooltip>
  <v-tooltip bottom>
    <char-avatar slot="activator" v-model="localGuide.team.white" />
    <v-card>
      <div>Level: {{localGuide.team.white.level}}</div>
      <div>Note: {{localGuide.team.white.note}}</div>
    </v-card>
  </v-tooltip>
  <v-tooltip bottom>
    <char-avatar slot="activator" v-model="localGuide.team.advisor" />
    <v-card>
      <div>Level: {{localGuide.team.advisor.level}}</div>
      <div>Note: {{localGuide.team.advisor.note}}</div>
    </v-card>
  </v-tooltip>
  <v-tooltip bottom>
    <char-avatar slot="activator" v-model="localGuide.team.guildAdvisor" />
    <v-card>
      <div>Level: {{localGuide.team.guildAdvisor.level}}</div>
      <div>Note: {{localGuide.team.guildAdvisor.note}}</div>
    </v-card>
  </v-tooltip>
  <span class="numturns">&nbsp;- {{localGuide.turns}} Turns</span>

  <p>{{localGuide.description}}</p>

  <h2>Stages</h2>
  <v-card v-for="(item, idx) in localGuide.stages" :key="idx">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{`Stage ${idx + 1}/${localGuide.stages.length}`}}</h3>
        <div>
          <v-tooltip
            v-for="(monster, idx2) in item.monsters"
            :key="idx2"
            bottom>
            <char-avatar
              slot="activator"
              v-model="temp" />
              <span>
                <div>HP: {{monster.hp}}/{{monster.fullHp}}</div>
                <div>Armor: {{monster.armor}}/{{monster.fullArmor}}</div>
                <div v-for="(skill, idx3) in monster.skills" :key="idx3">
                  <char-avatar :size="18" v-model="skill.code" /> {{skill.note}}
                </div>
              </span>
          </v-tooltip>
        </div>
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
      temp: {
        portrait: '/static/avatar/figure_none.png'
      },
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
        this.localGuide.team.gold = {
          level: this.localGuide.team.gold.level,
          note: this.localGuide.team.gold.note,
          ...CharList.findCharacter(val.team.gold.char)
        }
        this.localGuide.team.black = {
          level: this.localGuide.team.black.level,
          note: this.localGuide.team.black.note,
          ...CharList.findCharacter(val.team.black.char)
        }
        this.localGuide.team.white = {
          level: this.localGuide.team.white.level,
          note: this.localGuide.team.white.note,
          ...CharList.findCharacter(val.team.white.char)
        }
        this.localGuide.team.advisor = {
          level: this.localGuide.team.advisor.level,
          note: this.localGuide.team.advisor.note,
          ...CharList.findCharacter(val.team.advisor.char)
        }
        this.localGuide.team.guildAdvisor = {
          level: this.localGuide.team.guildAdvisor.level,
          note: this.localGuide.team.guildAdvisor.note,
          ...CharList.findCharacter(val.team.guildAdvisor.char)
        }
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
.numturns {
  font-size: 2em;
}
</style>
