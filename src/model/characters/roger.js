import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Roger from './base/Roger'

export const roger_n = new Roger({
  tier: n,
  title: "Robbin' Good",
  passive: {
    name: 'Roar Reversal',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Empower Ranger',
    description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
  },
  '1B': {
    name: 'Cut and Waste',
    description: 'Attack (:crossed_swords: x 1) front row enemy',
  },
  '2B': {
    name: 'Cutting Pledge',
    description: 'Attack (:crossed_swords: x 2) front row enemy. Grant self :VUL',
  },
  '4B': {
    name: 'Cut Core Nerves',
    description: 'Attack (:crossed_swords: x 4) front row enemy',
  },
})
export const roger_r = new Roger({
  tier: r,
  title: 'Raw Outlaw',
  passive: {
    name: 'Roar Reversal',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Empower Ranger',
    description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
  },
  '1B': {
    name: 'Cut and Waste',
    description: 'Attack (:crossed_swords: x 1) front row enemy',
  },
  '2B': {
    name: 'Cutting Pledge',
    description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
  },
  '4B': {
    name: 'Cut Core Nerves',
    description: 'Attack (:crossed_swords: x 4) front row enemy',
  },
})
export const roger_sr = new Roger({
  tier: sr,
  title: 'Plunder Plus',
  passive: {
    name: 'Roar Reversal',
    description: 'Upon less than 80/50% HP, increase skill power of 1/2 block skill by 50%',
  },
  advisor: {
    name: 'Empower Ranger',
    description: 'If ally has less than 50% HP, increase skill power of 1 block skill by 50%',
  },
  '1B': {
    name: 'Cut and Waste',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy. Remove self 20% HP',
  },
  '2B': {
    name: 'Cutting Pledge',
    description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
  },
  '4B': {
    name: 'Cut Core Nerves',
    description: 'Attack (:crossed_swords: x 4) front row enemy',
  },
})
export const roger_ssr = new Roger({
  tier: ssr,
  title: 'Armed Berserker',
  passive: {
    name: 'Roar Reversal',
    description: 'Upon less than 80/50/20% HP, increase skill power of 1/2/4 block skill by 50%',
  },
  advisor: {
    name: 'Empower Ranger',
    description: 'If ally has less than 80% HP, increase skill power of 1 block skill by 50%',
  },
  '1B': {
    name: 'Cut and Waste',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy. Remove self 20% HP',
  },
  '2B': {
    name: 'Cutting Pledge',
    description: 'Attack (:crossed_swords: x 2.5) front row enemy. Grant self :VUL for 3 turns',
  },
  '4B': {
    name: 'Cut Core Nerves',
    description: 'Attack (:crossed_swords: x 6) front row enemy. Trigger death of self',
  },
})
