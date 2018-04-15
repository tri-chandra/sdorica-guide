import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Koll from './base/Koll'

export const koll_n = new Koll({
  tier: n,
  title: 'Flame Boy Chant',
  passive: {
    name: 'Wolfgang Deus',
    description: 'Upon Tier R, unlock passive skill',
  },
  advisor: {
    name: 'Aware Wolf',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)',
  },
  b1: {
    name: 'Ready Maim Fire',
    description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy.',
  },
  b2: {
    name: 'Champ Fire',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Misfire Fighter',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
  },
})
export const koll_r = new Koll({
  tier: r,
  title: 'Fear The Sear',
  passive: {
    name: 'Wolfgang Deus',
    description: 'Upon death of front row ally, grant self :VUL, trigger self 4 block skill.',
  },
  advisor: {
    name: 'Aware Wolf',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 12)',
  },
  b1: {
    name: 'Ready Maim Fire',
    description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant :VUL',
  },
  b2: {
    name: 'Champ Fire',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Misfire Fighter',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
  },
})
export const koll_sr = new Koll({
  tier: sr,
  title: 'Unchained Smoker',
  passive: {
    name: 'Wolfgang Deus',
    description: 'Upon death of front row ally, trigger self 4 block skill.',
  },
  advisor: {
    name: 'Aware Wolf',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 11)',
  },
  b1: {
    name: 'Ready Maim Fire',
    description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks :VUL.',
  },
  b2: {
    name: 'Champ Fire',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Misfire Fighter',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
  },
})
export const koll_ssr = new Koll({
  tier: ssr,
  title: 'Entrails Blazer',
  passive: {
    name: 'Wolfgang Deus',
    description: 'Upon death of front row ally, trigger self 4 block skill.',
  },
  advisor: {
    name: 'Aware Wolf',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies. (CD: 10)',
  },
  b1: {
    name: 'Ready Maim Fire',
    description: 'Armor Penetration (:crossed_swords: x 0.75) front row enemy, grant 2 stacks :VUL.',
  },
  b2: {
    name: 'Champ Fire',
    description: 'Heal (:crossed_swords: x 1.35) selected ally, grant :DMGRED for 3 turns.',
  },
  b4: {
    name: 'Misfire Fighter',
    description: 'Attack (:crossed_swords: x 2.5) all enemies and (:crossed_swords: x 1) all allies.',
  },
})
