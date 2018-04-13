import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Naya from './base/Naya'

export const naya_n = new Naya({
  tier: n,
  title: 'Shiver Quiver',
  passive: {
    name: 'Bullseye',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Bolt Down',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 7)',
  },
  '1B': {
    name: 'Hot Shot',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
  },
  '2B': {
    name: 'Blood Shot',
    description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
  },
  '4B': {
    name: 'Skyfall Shot',
    description: 'Attack (:crossed_swords: x 2.5) selected enemy',
  },
})
export const naya_r = new Naya({
  tier: r,
  title: 'Right Won Target',
  passive: {
    name: 'Bullseye',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Bolt Down',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 7)',
  },
  '1B': {
    name: 'Hot Shot',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
  },
  '2B': {
    name: 'Blood Shot',
    description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
  },
  '4B': {
    name: 'Skyfall Shot',
    description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
  },
})
export const naya_sr = new Naya({
  tier: sr,
  title: 'Volley Fall',
  passive: {
    name: 'Bullseye',
    description: 'Upon cast Attack, if target has :VUL, increase Critical Strike Chance',
  },
  advisor: {
    name: 'Bolt Down',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 6)',
  },
  '1B': {
    name: 'Hot Shot',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
  },
  '2B': {
    name: 'Blood Shot',
    description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance to trigger self 4 block skill instead',
  },
  '4B': {
    name: 'Skyfall Shot',
    description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 2x Damage',
  },
})
export const naya_ssr = new Naya({
  tier: ssr,
  title: 'Cascade Of Curses',
  passive: {
    name: 'Bullseye',
    description: 'Upon cast Attack, if target has :VUL, increase Critical Strike Chance',
  },
  advisor: {
    name: 'Bolt Down',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns (CD: 5)',
  },
  '1B': {
    name: 'Hot Shot',
    description: 'Attack (:crossed_swords: x 0.6) selected enemy, grant :VUL for 2 turns',
  },
  '2B': {
    name: 'Blood Shot',
    description: 'Attack (:crossed_swords: x 1.2) selected enemy. 20% chance to trigger self 4 block skill instead',
  },
  '4B': {
    name: 'Skyfall Shot',
    description: 'Attack (:crossed_swords: x 2.5) selected enemy. 20% chance for a Critical Strike that does 3x Damage',
  },
})
