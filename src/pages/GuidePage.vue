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
    <char-card
      :position="whiteCharList"
    />

    <v-navigation-drawer
      temporary
      :right="true"
      v-model="showCharDetails"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="doNothing">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { gold, black, white, advisor, guildAdvisor } from '@/model/characters'
import CharCard from '@/components/guide/CharCard'

export default {
  name: 'GuidePage',
  components: { CharCard },
  props: {
    id: String
  },
  data() {
    return {
      localGuide: {},
      showCharDetails: true,
      whiteCharList: white
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
    doNothing() {

    }
  }
}
</script>
