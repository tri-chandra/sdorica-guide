<template>
  <v-container grid-list-md>
    <v-alert
      v-if="$root.isLoggedIn && guideList.length<=0"
      type="info"
      :value="hasNoGuide">
      You don't have any guide yet, why don't you add your first guide by clicking the
      <v-avatar class="teal" :size="22"><v-icon dark>add</v-icon></v-avatar>
      button?
    </v-alert>
    <v-btn
      v-if="$root.isLoggedIn"
      fab
      small
      top
      color="green"
      @click="showDialog = true"
    ><v-icon>add</v-icon></v-btn>
    <v-list>
      <guide-item
        v-for="item in guideList"
        :key="item.id"
        :value="item"
        @click="gotoGuide(item)"
      />
    </v-list>
    <v-dialog v-model="showDialog">
      <add-guide-card @submitted="onSubmit"></add-guide-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AddGuideCard from '@/components/main/AddGuideCard'
import GuideItem from '@/components/main/GuideListItem'

export default {
  components: { AddGuideCard, GuideItem },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    guideList() {
      return this.$store.getters.guides
    },
    hasNoGuide() {
      return true
    }
  },
  methods: {
    onSubmit(value) {
      this.$store.dispatch('addNewGuide',
      {
        title: value.title,
        description: value.description
      }).then(() => {
        this.showDialog = false
      }).catch((error) => {
        console.log(error)
      })
    },
    gotoGuide(guide) {
      this.$router.push(`/guide/${guide.id}`)
    }
  }
}
</script>
