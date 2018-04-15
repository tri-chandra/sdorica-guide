import { n, r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Puggi from './base/Puggi'

export const puggi_n = new Puggi({
  tier: n,
  title: 'Faraway Fledgling',
  passive: {
    name: 'False Bravado',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Motormouth',
    description: 'Grant selected ally Taunt. (CD: 3)',
  },
  b1: {
    name: 'Mockingbird',
    description: 'Grant selected enemy :EXH.',
  },
  b2: {
    name: "Bird's The Word",
    description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally.',
  },
  b4: {
    name: 'Bird Brain Storming',
    description: 'Grant selected enemy CD +3',
  },
})
export const puggi_r = new Puggi({
  tier: r,
  title: 'Tourist Chap',
  passive: {
    name: 'False Bravado',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Motormouth',
    description: 'Grant selected ally Taunt. (CD: 3)',
  },
  b1: {
    name: 'Mockingbird',
    description: 'Grant selected enemy 2 stacks :EXH.',
  },
  b2: {
    name: "Bird's The Word",
    description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally.',
  },
  b4: {
    name: 'Bird Brain Storming',
    description: 'Grant selected enemy CD +3',
  },
})
export const puggi_sr = new Puggi({
  tier: sr,
  title: 'Wander Klutz',
  passive: {
    name: 'False Bravado',
    description: 'Upon death of ally, grant self full HP.',
  },
  advisor: {
    name: 'Motormouth',
    description: 'Grant selected ally Taunt. (CD: 2)',
  },
  b1: {
    name: 'Mockingbird',
    description: 'Grant selected enemy 2 stacks :EXH.',
  },
  b2: {
    name: "Bird's The Word",
    description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant :ENHANCE',
  },
  b4: {
    name: 'Bird Brain Storming',
    description: 'Grant selected enemy CD +3',
  },
})
export const puggi_ssr = new Puggi({
  tier: ssr,
  title: 'Puggi SSR: Seasoned Traveller',
  passive: {
    name: 'False Bravado',
    description: 'Upon death of ally, grant self full HP and Armor.',
  },
  advisor: {
    name: 'Motormouth',
    description: 'Grant selected ally Taunt. (CD: 1)',
  },
  b1: {
    name: 'Mockingbird',
    description: 'Grant selected enemy 2 stacks :EXH.',
  },
  b2: {
    name: "Bird's The Word",
    description: 'Heal (:crossed_swords: x 2.25) or (:crossed_swords: x 0.9) selected ally, grant :ENHANCE',
  },
  b4: {
    name: 'Bird Brain Storming',
    description: 'Grant all enemies CD +3',
  },
})
export const puggi_skin = new Puggi({
  tier: skin,
  title: 'Sir Adventurer',
  passive: {
    name: "Don't Fail Me",
    description: 'If front row ally was attacked more than 2 times in one turn, heal (:crossed_swords: x 0.45) ally, grant :REGEN for 3 turns.',
  },
  advisor: {
    name: 'Verbal Compliments',
    description: "Allies' Heal skills grant target :REGEN for 2 turns.",
  },
  b1: {
    name: 'Mockingbird',
    description: 'Grant selected enemy 2 stacks of :EXH',
  },
  b2: {
    name: 'Praise The Lord',
    description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :REGEN for 3 turns.',
  },
  b4: {
    name: 'All Hail Puggi!',
    description: 'Trigger all allies 4 block skill. Reset all anemies CD',
  },
})
