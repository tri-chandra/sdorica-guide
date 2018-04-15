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
    </v-form>

    <char-card @portraitClicked="onShowDetail"
      class="char-card"
      :position="goldCharList"
    />
    <char-card
      class="char-card"
      :position="blackCharList"
    />
    <char-card
      class="char-card"
      :position="whiteCharList"
    />
    <char-card
      class="char-card"
      :position="advisorCharList"
    />
    <char-card
      class="char-card"
      :position="guildCharList"
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
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Stage 3/3</h3>
          <div>Stage description, thoughts and strategies</div>
        </div>
      </v-card-title>
    </v-card>

    <v-text-field
      v-model="localGuide.closingNote"
      multi-line
      label="Closing Note"></v-text-field>

    <v-navigation-drawer
      temporary
      :right="true"
      v-model="showCharDetails"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <char-avatar v-model="selectedChar" />
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>List character stats and info here...</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { gold, black, white, advisor, guildAdvisor } from '@/model/characters'

import CharAvatar from '@/components/guide/CharAvatar'
import CharCard from '@/components/guide/CharCard'

export default {
  name: 'GuidePage',
  components: { CharCard, CharAvatar },
  props: {
    id: String
  },
  data() {
    return {
      localGuide: {},
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
      let temp = this.$store.getters.guideById(this.id)

      return temp ? temp : { title: '', description: ''}
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
    }
  }
}
</script>

<style scoped>
.char-card {
  margin-bottom: 10px;
}
</style>
