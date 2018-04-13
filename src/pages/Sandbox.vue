<template>
  <v-card>
    <v-avatar>
      <img src="" />
    </v-avatar>
    <v-select
      :items="items"
      label="LABEL"
    >
      <template slot="selection" slot-scope="data">
        <char-avatar :size="24" v-model="data.item" />
        {{data.item.name}}
      </template>

      <template slot="item" slot-scope="data">
        <char-avatar :size="48" v-model="data.item" />
        {{data.item.name}}
      </template>
    </v-select>
  </v-card>
</template>

<script>
import CharAvatar from '@/components/guide/CharAvatar'
import CharList from '@/model/characters'

export default {
  components: { CharAvatar },
  data() {
    return {
      items: CharList.advisor
    }
  },
  methods: {

  }
}
</script>
