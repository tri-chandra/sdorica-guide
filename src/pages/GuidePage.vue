<template>
  <v-container grid-list-md>
    <v-form>
      <v-text-field
          v-model="localGuide.title"
          label="Title"></v-text-field>
      <v-text-field
        v-model="localGuide.description"
        multi-line
        label="Description"></v-text-field>
      <v-switch
        label="Public"
        color="success"
        v-model="localGuide.isPublic"
      ></v-switch>
    </v-form>

    <char-card
      title="Gold Slot"
      @portraitClicked="onShowDetail"
      class="char-card"
      :position="goldCharList"
      v-model="localGuide.team.gold"
    />
    <char-card
      title="Black Slot"
      @portraitClicked="onShowDetail"
      class="char-card"
      :position="blackCharList"
      v-model="localGuide.team.black"
    />
    <char-card
      title="White Slot"
      @portraitClicked="onShowDetail"
      class="char-card"
      :position="whiteCharList"
      v-model="localGuide.team.white"
    />
    <char-card
      title="Advisor Slot"
      @portraitClicked="onShowDetail"
      class="char-card"
      :position="advisorCharList"
      v-model="localGuide.team.advisor"
    />
    <char-card
      title="Guild Advisor"
      @portraitClicked="onShowDetail"
      class="char-card"
      :position="guildCharList"
      v-model="localGuide.team.guildAdvisor"
    />

    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Stage 1/3</h3>
          <div>Stage description, thoughts and strategies</div>
        </div>
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Stage 2/3</h3>
          <div>Stage description, thoughts and strategies</div>
        </div>
      </v-card-title>
    </v-card>
    <monster-card class="char-card" />

    <v-text-field
      v-model="localGuide.closingNote"
      multi-line
      label="Closing Note"></v-text-field>

    <v-btn @click="saveGuide">Save</v-btn>

    <v-navigation-drawer
      temporary
      :right="true"
      v-model="showCharDetails"
      fixed
      app
    >
      <v-list class="infoPanel">
        <v-list-tile>
          <char-avatar v-model="selectedChar" />
        </v-list-tile>
        <v-list-tile>
          {{ selectedChar.displayName }}
        </v-list-tile>
        <v-list-tile>
          <skill-icon icon="passive" bg="1"/>
          <v-list-tile-content>
            <v-list-tile-title>{{ selectedChar.passive && selectedChar.passive.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ selectedChar.passive && selectedChar.passive.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <skill-icon icon="assist" bg="1"/>
          <v-list-tile-content>
            <v-list-tile-title>{{ selectedChar.advisor && selectedChar.advisor.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ selectedChar.advisor && selectedChar.advisor.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <skill-icon icon="1" bg="2"/>
          <v-list-tile-content>
            <v-list-tile-title>{{ selectedChar.b1 && selectedChar.b1.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ selectedChar.b1 && selectedChar.b1.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <skill-icon icon="2" bg="2"/>
          <v-list-tile-content>
            <v-list-tile-title>{{ selectedChar.b2 && selectedChar.b2.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ selectedChar.b2 && selectedChar.b2.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <skill-icon icon="4" bg="2"/>
          <v-list-tile-content>
            <v-list-tile-title>{{ selectedChar.b2 && selectedChar.b2.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ selectedChar.b2 && selectedChar.b2.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { gold, black, white, advisor, guildAdvisor } from '@/model/characters'

import SkillIcon from '@/components/guide/SkillIcon'
import CharAvatar from '@/components/guide/CharAvatar'
import CharCard from '@/components/guide/CharCard'
import MonsterCard from '@/components/guide/MonsterCard'

export default {
  name: 'GuidePage',
  components: { SkillIcon, CharCard, CharAvatar, MonsterCard },
  props: {
    id: String
  },
  data() {
    return {
      localGuide: {
        team: {

        }
      },
      selectedChar: {},
      showCharDetails: false,
      whiteCharList: white,
      blackCharList: black,
      goldCharList: gold,
      advisorCharList: advisor,
      guildCharList: guildAdvisor
    }
  },
  computed: {
    guide() {
      return this.$store.getters.selectedGuide
    }
  },
  watch: {
    guide(val) {
      this.localGuide = val
    }
  },
  methods: {
    onShowDetail(selectedChar) {
      if (selectedChar) {
        this.showCharDetails = true
        this.selectedChar = selectedChar
      }
    },
    saveGuide() {
      this.$store.dispatch('saveGuide', this.localGuide)
    }
  },
  mounted() {
    this.$store.dispatch('getSelectedGuide', this.id)
  }
}
</script>

<style scoped>
.char-card {
  margin-bottom: 10px;
}
.infoPanel {
  margin-top: 40px;
}
</style>
