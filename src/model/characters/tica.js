import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Tica from './base/Tica'

export const tica_n = new Tica({
  tier: n,
  title: 'Fortune Rookie',
  passive: {
    name: 'Rune Roll',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Healing Vibes',
    description: 'Allies\' Heal effects increase by 15%.',
  },
  b1: {
    name: 'High Light',
    description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
  },
  b2: {
    name: 'Flash Light',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
  },
  b4: {
    name: 'Let There Be Light',
    description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %.',
  },
})
export const tica_r = new Tica({
  tier: r,
  title: 'Whizz Kid',
  passive: {
    name: 'Rune Roll',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Healing Vibes',
    description: 'Allies\' Heal effects increased by 20%.',
  },
  b1: {
    name: 'High Light',
    description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
  },
  b2: {
    name: 'Flash Light',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy.',
  },
  b4: {
    name: 'Let There Be Light',
    description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns.',
  },
})
export const tica_sr = new Tica({
  tier: sr,
  title: 'Dream Snatcher',
  passive: {
    name: 'Rune Roll',
    description: 'Upon cast 2 block skill continuously 2 times, trigger 2 block skill 1 time.',
  },
  advisor: {
    name: 'Healing Vibes',
    description: 'Allies\' Heal effects increased by 25%.',
  },
  b1: {
    name: 'High Light',
    description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
  },
  b2: {
    name: 'Flash Light',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
  },
  b4: {
    name: 'Let There Be Light',
    description: 'Heal (:crossed_swords: x 2.25) ally with lowest HP %, grant :DMGRED for 3 turns.',
  },
})
export const tica_ssr = new Tica({
  tier: ssr,
  title: 'Miracle Maker',
  passive: {
    name: 'Rune Roll',
    description: 'Upon cast 2 block skill continuously 2 times, trigger 2 block skill 2 times.',
  },
  advisor: {
    name: 'Healing Vibes',
    description: 'Allies\' Heal effects increased by 30%.',
  },
  b1: {
    name: 'High Light',
    description: 'Heal (:crossed_swords: x 0.45) selected ally, grant :ENHANCE for 2 turns.',
  },
  b2: {
    name: 'Flash Light',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. Clear 1 white block.',
  },
  b4: {
    name: 'Let There Be Light',
    description: 'Heal (:crossed_swords: x 2.25) selected ally, grant :DMGRED for 3 turns.',
  },
})
