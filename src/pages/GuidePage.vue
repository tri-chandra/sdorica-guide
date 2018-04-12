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
      angelia: angelia_r
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
  mounted() {
    console.log(angelia_r)
  }
}
</script>
