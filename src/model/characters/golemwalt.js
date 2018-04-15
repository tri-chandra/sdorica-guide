import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Golemwalt from './base/Golemwalt';

export const golemwalt_n = new Golemwalt({
  tier: n,
  title: 'Pebble Pusher',
  passive: {
    name: "Won't Cave In",
    description: 'Upon Tier R, unlock passive skill',
  },
  advisor: {
    name: 'Collision Course',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 12)',
  },
  b1: {
    name: 'On The Rocks',
    description: 'Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns',
  },
  b2: {
    name: "Rock N' Roll",
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Rocky Horror Show',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies',
  },
})
export const golemwalt_r = new Golemwalt({
  tier: r,
  title: 'Boulder Brute',
  passive: {
    name: "Won't Cave In",
    description: 'Upon death of any enemy, grant self (:crossed_swords: x 0.6) Armor',
  },
  advisor: {
    name: 'Collision Course',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 12)',
  },
  b1: {
    name: 'On The Rocks',
    description: 'Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all allies :ENHANCE for 3 turns instead',
  },
  b2: {
    name: "Rock N' Roll",
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Rocky Horror Show',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies',
  },
})
export const golemwalt_sr = new Golemwalt({
  tier: sr,
  title: 'Shrine Stone',
  passive: {
    name: "Won't Cave In",
    description: 'Upon death of any character, grant self (:crossed_swords: x 0.6) Armor',
  },
  advisor: {
    name: 'Collision Course',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 11)',
  },
  b1: {
    name: 'On The Rocks',
    description: 'Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all allies :ENHANCE for 3 turns instead',
  },
  b2: {
    name: "Rock N' Roll",
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Rocky Horror Show',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies',
  },
})
export const golemwalt_ssr = new Golemwalt({
  tier: ssr,
  title: 'Monolith of Myth',
  passive: {
    name: "Won't Cave In",
    description: 'Upon death of any character, grant self (:crossed_swords: x 1.2) Armor',
  },
  advisor: {
    name: 'Collision Course',
    description: 'Armor Penetration (:crossed_swords: x 1.87) all enemies and (:crossed_swords: x 0.75) all allies (CD: 10)',
  },
  b1: {
    name: 'On The Rocks',
    description: 'Grant self (:crossed_swords: x 0.36) Armor and :ENHANCE for 3 turns. If have Armor, grant all allies :ENHANCE for 3 turns instead',
  },
  b2: {
    name: "Rock N' Roll",
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. If have Armor, Armor Penetration (:crossed_swords: x 1.5) selected enemy instead',
  },
  b4: {
    name: 'Rocky Horror Show',
    description: 'Armor Penetration (:crossed_swords: x 1.875) all enemies and (:crossed_swords: x 0.75) all allies.  If have Armor, Armor Penetration (:crossed_swords: x 1.875) all enemies instead',
  },
})
