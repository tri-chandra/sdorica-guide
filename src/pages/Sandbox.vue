<template>
<div>
  <v-list>
    <v-list-group
      v-model="isExpanded"
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
</div>
</template>

<script>
import MonsterCard from '@/components/guide/MonsterCard'

export default {
  components: { MonsterCard },
  data() {
    return {
      model: {
        monsters: [],
        note: ''
      },
      isExpanded: true,
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
  methods: {

  }
}
</script>
