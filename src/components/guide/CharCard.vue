<template>
  <v-card>
    <v-layout>
      <v-flex xs4>
        <v-avatar :size="192" tile>
          <img :src="selectedChar.portrait" />
        </v-avatar>
        <v-select
          v-model="selectedChar"
          :items="position"
          label="Select a character..."
        >
          <template slot="selection" slot-scope="data">
            <char-avatar :size="24" v-model="data.item" />
            {{data.item.displayName}}
          </template>

          <template slot="item" slot-scope="data">
            <char-avatar :size="48" v-model="data.item" />
            {{data.item.displayName}}
          </template>
        </v-select>
      </v-flex>
      <v-flex xs8>
        <v-form>
          <v-text-field label="Level"></v-text-field>
          <v-text-field multi-line label="Note"></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import CharAvatar from '@/components/guide/CharAvatar'
import CharList from '@/model/characters'

export default {
  name: 'CharCard',
  props: {
    position: Array
  },
  components: { CharAvatar },
  data() {
    return {
      selectedChar: {portrait:''}
    }
  },
  methods: {

  }
}
</script>
