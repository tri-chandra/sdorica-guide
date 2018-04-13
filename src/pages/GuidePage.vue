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
      :value="{portrait: '/static/avatar/angelia_r.png', name: 'TEST'}"
    />
    <char-avatar
      :value="{portrait: '/static/avatar/lio_r.png', name: 'TEST'}"
    />
    <char-avatar
      :value="{portrait: '/static/avatar/fatima_r.png', name: 'TEST'}"
    />

    <char-avatar
      :value="angelia1"
    />
    <char-avatar
      :value="angelia2"
    />
    <char-avatar
      :value="angelia3"
    />
    <char-avatar
      :value="angelia4"
    />
    <char-avatar
      :value="angelia5"
    />
    <char-avatar
      :value="angelia6"
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
import { angelia_n, angelia_r, angelia_sr, angelia_ssr, angelia_sp, angelia_skin } from '@/model/characters/angelia'

export default {
  name: 'GuidePage',
  components: { CharAvatar },
  props: {
    id: String
  },
  data() {
    return {
      localGuide: {},
      angelia1: angelia_n,
      angelia2: angelia_r,
      angelia3: angelia_sr,
      angelia4: angelia_ssr,
      angelia5: angelia_sp,
      angelia6: angelia_skin,
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
