<template>
<div>
  <v-list>
    <template
      v-for="item in wt"
    >
      <v-divider :key="item.day+'d'"></v-divider>
      <v-subheader :key="item.day">{{ item.day }}</v-subheader>
      <v-list-group
        v-for="subItem in item.trials"
        :key="subItem.title"
        no-action>
        <v-list-tile
          :key="`a${subItem.title}`"
          slot="activator"
          >
          <v-list-tile-content>
            {{ subItem.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          :key="`i${subItem.title}`">
          TEMP
        </v-list-tile>
      </v-list-group>
    </template>
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
