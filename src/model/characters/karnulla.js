import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Karnulla from './base/Karnulla'

export const karnulla_n = new Karnulla({
  tier: n,
  title: 'Mouth of Madness',
  passive: {
    name: 'Underwater Craft',
    description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.38) against selected enemy',
  },
  advisor: {
    name: 'Submerge Urge',
    description: "Allies' Armor Penetration effects increase by 15%",
  },
  b1: {
    name: 'Doom Bloom',
    description: 'Grant self 2 stacks :VIGIL. Reset front row enemy CD',
  },
  b2: {
    name: 'Annihilate Bloomer',
    description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy',
  },
  b4: {
    name: 'In Full Bloom',
    description: 'Grant self 3 stacks :VIGIL. Reset all enemies CD',
  },
})
export const karnulla_r = new Karnulla({
  tier: r,
  title: 'Crocodile Dummy',
  passive: {
    name: 'Underwater Craft',
    description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy',
  },
  advisor: {
    name: 'Submerge Urge',
    description: "Allies' Armor Penetration effects increase by 20%",
  },
  b1: {
    name: 'Doom Bloom',
    description: 'Grant self Taunt and 2 stacks :VIGIL. Reset front row enemy CD',
  },
  b2: {
    name: 'Annihilate Bloomer',
    description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy',
  },
  b4: {
    name: 'In Full Bloom',
    description: 'Grant self Taunt and 3 stacks :VIGIL. Reset all enemies CD',
  },
})
export const karnulla_sr = new Karnulla({
  tier: sr,
  title: 'Greater Alligator',
  passive: {
    name: 'Underwater Craft',
    description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy, grant :EXH',
  },
  advisor: {
    name: 'Submerge Urge',
    description: "Allies' Armor Penetration effects increase by 25%",
  },
  b1: {
    name: 'Doom Bloom',
    description: 'Grant self Taunt and 2 stacks :VIGIL. Reset front row enemy CD',
  },
  b2: {
    name: 'Annihilate Bloomer',
    description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self :ENHANCE for 3 turns',
  },
  b4: {
    name: 'In Full Bloom',
    description: 'Grant self Taunt and 3 stacks :VIGIL. Reset all enemies CD',
  },
})
export const karnulla_ssr = new Karnulla({
  tier: ssr,
  title: 'Apex Predator',
  passive: {
    name: 'Underwater Craft',
    description: 'Upon incoming damage skill. retaliate with Armor Penetration (:crossed_swords: x 0.56) against selected enemy, grant :EXH',
  },
  advisor: {
    name: 'Submerge Urge',
    description: "Allies' Armor Penetration effects increase by 30%",
  },
  b1: {
    name: 'Doom Bloom',
    description: 'Grant self Taunt and 2 stacks :VIGIL. Reset front row enemy CD',
  },
  b2: {
    name: 'Annihilate Bloomer',
    description: 'Armor Penetration (:crossed_swords: x 1.125) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
  },
  b4: {
    name: 'In Full Bloom',
    description: 'Grant self Taunt and 3 stacks :VIGIL. Reset all enemies CD',
  },
})
