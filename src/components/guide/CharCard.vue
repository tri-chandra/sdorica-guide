<template>
  <v-card style="padding:10px;">
    <v-layout row wrap>
      <v-flex xs12>{{title}}</v-flex>
      <v-flex xs12>
        <v-form>
          <v-select
            v-model="selectedChar"
            :items="position"
            label="Select a character..."
            @input="doEmit"
          >
            <template slot="selection" slot-scope="data">
              <char-avatar :size="80" v-model="data.item" />
              {{data.item.displayName}}
              <v-btn flat @click.stop="onInfoClicked">Info</v-btn>
            </template>

            <template slot="item" slot-scope="data">
              <char-avatar :size="48" v-model="data.item" />
              {{data.item.displayName}}
            </template>
          </v-select>
          <v-text-field
            label="Level"
            v-model="level"
            @input="doEmit"></v-text-field>
          <v-text-field
            multi-line
            label="Note"
            v-model="note"
            @input="doEmit"></v-text-field>
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
    value: Object,
    position: Array,
    title: String
  },
  components: { CharAvatar },
  data() {
    return {
      selectedChar: {
        portrait:'/static/avatar/figure_none.png',
        code: '',
        tier: {
          code: ''
        }
      },
      level: '',
      note: ''
    }
  },
  watch: {
    value(val) {
      const chara = CharList.findCharacter(val.char)
      if (chara) this.selectedChar = chara
      this.level = val.level
      this.note = val.note
    }
  },
  methods: {
    onInfoClicked() {
      this.$emit('portraitClicked', {...this.selectedChar})
    },
    doEmit() {
      this.$emit('input', {
        char: this.selectedChar ? `${this.selectedChar.code}_${this.selectedChar.tier.code}` : '',
        level: this.level || '',
        note: this.note || ''
      })
    }
  },
  mounted() {
    if (this.value) {
      const chara = CharList.findCharacter(this.value.char)
      if (chara) this.selectedChar = chara
      this.level = this.value.level
      this.note = this.value.note
    }
  }
}
</script>
