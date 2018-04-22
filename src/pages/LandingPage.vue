<template>
  <v-container grid-list-md>
    <h1>Guide List</h1>
    <v-list>
      <v-list-group
        v-for="item in wt"
        :key="item.day"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.day }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="subItem in item.trials" :key="subItem.title" @click="gotoGuide(subItem.title)">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
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
  name: 'LandingPage',
  components: { AddGuideCard, GuideItem },
  data() {
    return {
      showDialog: false,
      wt: [
        {
          day: 'Monday',
          trials: [
            { title: 'Fort Knocks Out' },
            { title: 'Creeping Closer' },
            { title: 'Sinister Strategy' },
            { title: 'Pang\'s Trial' }
          ]
        },
        {
          day: 'Tuesday',
          trials: [
            { title: 'Almost Undefeatable' },
            { title: 'Ride the Momentum' },
            { title: 'Immune to not full HP/no armor' },
            { title: 'Fatima\'s Trial' }
          ]
        },
        {
          day: 'Wednesday',
          trials: [
            { title: 'Invincible Frontier' },
            { title: 'Enemy Support' },
            { title: 'Cautious Approach' },
            { title: 'Golemwalt\'s Trial' }
          ]
        },
        {
          day: 'Thursday',
          trials: [
            { title: 'Take Them All' },
            { title: 'Immune to Enhance/Dmg Reduction' },
            { title: 'It\'s a Trap' },
            { title: 'Kittyeyes\' Trial' }
          ]
        },
        {
          day: 'Friday',
          trials: [
            { title: 'Dodge Ballistics' },
            { title: 'Reviving Enemies' },
            { title: 'No Turning Back' },
            { title: 'Red Captain League' }
          ]
        },
        {
          day: 'Saturday',
          trials: [
            { title: 'Puny Tricks' },
            { title: 'As Aggressive As Fire' },
            { title: 'Instinct and Intellect' },
            { title: 'Sudden Deathmatch' }
          ]
        },
        {
          day: 'Sunday',
          trials: [
            { title: 'Stunning Smash' },
            { title: 'It\'s a Trap' },
            { title: 'Heroic Challenge Pt. 1' },
            { title: 'Long Grueling Slugfest' }
          ]
        }
      ]
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
    gotoGuide(path) {
      this.$router.push(`/set-guide/${path}`)
    }
  }
}
</script>
