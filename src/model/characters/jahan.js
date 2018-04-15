import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Jahan from './base/Jahan'

export const jahan_r = new Jahan({
  tier: r,
  title: 'Aristocrat Brat',
  passive: {
    name: 'Jump Grope',
    description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1) against selected enemy',
  },
  advisor: {
    name: 'Trick Is Treat',
    description: 'Upon incoming damage skill against ally, if ally have Taunt, 20% chance to trigger target 4 block skill',
  },
  b1: {
    name: 'Dead Giveaway',
    description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
  },
  b2: {
    name: 'Dead Wait',
    description: 'Grant self Taunt for 2 turns and :DMGRED. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
  },
  b4: {
    name: "Knock 'Em Dead",
    description: 'Attack (:crossed_swords: x 3) selected enemy',
  },
})
export const jahan_sr = new Jahan({
  tier: sr,
  title: 'Charms and Noble',
  passive: {
    name: 'Jump Grope',
    description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy',
  },
  advisor: {
    name: 'Trick Is Treat',
    description: 'Upon incoming damage skill against ally, if ally have Taunt, 25% chance to trigger target 4 block skill',
  },
  b1: {
    name: 'Dead Giveaway',
    description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
  },
  b2: {
    name: 'Dead Wait',
    description: 'Grant self Taunt for 2 turns and 2 stacks :DMGRED. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
  },
  b4: {
    name: "Knock 'Em Dead",
    description: 'Attack (:crossed_swords: x 4) selected enemy, reset target CD',
  },
})
export const jahan_ssr = new Jahan({
  tier: ssr,
  title: 'Sir Dance a Lot',
  passive: {
    name: 'Jump Grope',
    description: 'Upon incoming damage skill, if have Taunt, retaliate with Attack (:crossed_swords: x 1.5) against selected enemy, grant :POIS',
  },
  advisor: {
    name: 'Trick Is Treat',
    description: 'Upon incoming damage skill against ally, if ally have Taunt, 30% chance to trigger target 4 block skill',
  },
  b1: {
    name: 'Dead Giveaway',
    description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
  },
  b2: {
    name: 'Dead Wait',
    description: 'Grant self Taunt for 2 turns and :DMGRED for 2 turns. If have Taunt, Heal (:crossed_swords: x 1.8) self instead',
  },
  b4: {
    name: "Knock 'Em Dead",
    description: 'Attack (:crossed_swords: x 4) selected enemy, reset target CD',
  },
})
export const jahan_skin = new Jahan({
  tier: skin,
  title: 'Shiny Derpy Pinky',
  passive: {
    name: 'Borrowed Steel',
    description: 'Upon incoming damage skill, if have Taunt, trigger random ally 1 block skill',
  },
  advisor: {
    name: 'Tactical Taunting',
    description: 'Reset selected enemy CD (CD: 3)',
  },
  b1: {
    name: 'Dead Giveaway',
    description: 'Grant self Taunt for 5 turns. Reset front row enemy CD',
  },
  b2: {
    name: 'Mocking Jab',
    description: 'Grant self Taunt for 2 turns and 2 stacks :DMGRED. If have Taunt, True Damage (:crossed_swords: x 1) all enemies, grant :EXH and :TEAR',
  },
  b4: {
    name: 'Pièce De Résistance ',
    description: 'True Damage (:crossed_swords: x 4) selected enemy, reset all enemies CD',
  },
})
