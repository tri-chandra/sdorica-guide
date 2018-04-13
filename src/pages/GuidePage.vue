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
    <char-avatar
      :value="{portrait: '/static/avatar/pang_r.png', name: 'TEST'}"
    />
    <char-avatar
      :value="{portrait: '/static/avatar/naya_r.png', name: 'TEST'}"
    />
    <char-avatar
      :value="angelia"
    />
    <char-avatar
      :value="{portrait: '/static/avatar/lio_r.png', name: 'TEST'}"
    />
    <char-avatar
      :value="{portrait: '/static/avatar/fatima_r.png', name: 'TEST'}"
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
import CharAvatar from '@/components/guide/CharAvatar'
import { angelia_r } from '@/model/characters/angelia'

export default {
  name: 'GuidePage',
  components: { CharAvatar },
  props: {
    id: String
  },
  data() {
    return {
      localGuide: {},
      angelia: angelia_r,
      showCharDetails: true
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
  },
  mounted() {
    console.log(angelia_r)
  }
}
</script>
