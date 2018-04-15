import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Leah from './base/Leah'

export const leah_r= new Leah({
  tier: r,
  title: 'Stunt Trouble',
  passive: {
    name: 'Hare Raising',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Funny Bunny',
    description: 'Allies\' Attack effects increase by 20%',
  },
  b1: {
    name: 'Bad Egg',
    description: 'Attack (:crossed_swords: x 1) random enemy',
  },
  b2: {
    name: 'The Egg Chick',
    description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
  },
  b4: {
    name: 'Eggs Over Easy',
    description: 'Attack (:crossed_swords: x 1) random enemy 4 times',
  },
})
export const leah_sr = new Leah({
  tier: sr,
  title: 'Con Adolescent',
  passive: {
    name: 'Hare Raising',
    description: 'Upon turn, grant self 1 stack. Upon 4 stacks, increase skill power by 50% for next skill, reset stacks',
  },
  advisor: {
    name: 'Funny Bunny',
    description: 'Allies\' Attack effects increase by 25%',
  },
  b1: {
    name: 'Bad Egg',
    description: 'Attack (:crossed_swords: x 1) random enemy, grant Taunt',
  },
  b2: {
    name: 'The Egg Chick',
    description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
  },
  b4: {
    name: 'Eggs Over Easy',
    description: 'Attack (:crossed_swords: x 1) random enemy 4 times',
  },
})
export const leah_ssr = new Leah({
  tier: ssr,
  title: 'Original Prankster',
  passive: {
    name: 'Hare Raising',
    description: 'Upon turn, grant self 1 stack. Upon 3 stacks, increase skill power by 50% for next skill, reset stacks',
  },
  advisor: {
    name: 'Funny Bunny',
    description: 'Allies\' Attack effects increase by 30%',
  },
  b1: {
    name: 'Bad Egg',
    description: 'Attack (:crossed_swords: x 1) random enemy, grant Taunt',
  },
  b2: {
    name: 'The Egg Chick',
    description: 'Attack (:crossed_swords: x 1) random enemy 2 times',
  },
  b4: {
    name: 'Eggs Over Easy',
    description: 'Attack (:crossed_swords: x 1) random enemy 4 times with last hit dealing bonus damage (:crossed_swords: x 0.5), grant :EXH',
  },
})
