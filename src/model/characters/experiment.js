import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Experiment from './base/Experiment'

export const experiment_r = new Experiment({
  tier: r,
  title: 'Enigma Ignite',
  passive: {
    name: 'Kick Starter',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Convert Alert',
    description: '2 blocks become Gold (CD: 7)',
  },
  b1: {
    name: 'Manners Maketh Man',
    description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
  },
  b2: {
    name: 'Manner Of Whack',
    description: 'Attack (:crossed_swords: x 2) front row enemy. If have :SHOCKL, cannot cast skill',
  },
  b4: {
    name: 'Mind Your Manners',
    description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill.',
  },
})
export const experiment_sr = new Experiment({
  tier: sr,
  title: 'Evolution Module',
  passive: {
    name: 'Kick Starter',
    description: 'Upon incoming Attack, grant self 1 stack. Upon 5 stacks, grant self :SHOCKL. Upon receive Heal, reset stacks',
  },
  advisor: {
    name: 'Convert Alert',
    description: '2 blocks become Gold (CD: 6)',
  },
  b1: {
    name: 'Manners Maketh Man',
    description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
  },
  b2: {
    name: 'Manner Of Whack',
    description: 'Attack (:crossed_swords: x 2.5) front row enemy. Clear 1 block. If have :SHOCKL, cannot cast skill',
  },
  b4: {
    name: 'Mind Your Manners',
    description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill.',
  },
})
export const experiment_ssr = new Experiment({
  tier: ssr,
  title: 'Genesis Module',
  passive: {
    name: 'Kick Starter',
    description: 'Upon incoming Attack, grant self 1 stack. Upon 7 stacks, grant self :SHOCKL. Upon receive Heal, reset stacks',
  },
  advisor: {
    name: 'Convert Alert',
    description: '2 blocks become Gold (CD: 5)',
  },
  b1: {
    name: 'Manners Maketh Man',
    description: 'Heal (:crossed_swords: x 0.9) self. If have :SHOCKL, remove :SHOCKL',
  },
  b2: {
    name: 'Manner Of Whack',
    description: 'Attack (:crossed_swords: x 3.5) front row enemy. Grant self :SHOCKL. Clear 1 block. If have :SHOCKL, cannot cast skill',
  },
  b4: {
    name: 'Mind Your Manners',
    description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill',
  },
})
export const experiment_skin = new Experiment({
  tier: skin,
  title: 'Overcharge Module',
  passive: {
    name: 'Upgrade Ready',
    description: 'Upon Resurrection, grant self full HP and :ENHANCE for all turns',
  },
  advisor: {
    name: 'Pressurize',
    description: 'Upon Resurrection of gold character, grant full HP and :ENHANCE for all turns',
  },
  b1: {
    name: 'Transformation',
    description: 'Grant self :ENHANCE for all turns, lose half of current HP. If have :SHOCKL, remove :SHOCKL',
  },
  b2: {
    name: 'Short Circuit',
    description: 'Attack (:crossed_swords: x 3.5) front row enemy. Grant self :EXH for all turns. If have :SHOCKL, cannot cast skill',
  },
  b4: {
    name: 'High Voltage Bellow',
    description: 'Attack (:crossed_swords: x 3) all enemies. Grant self :SHOCKL. If have :SHOCKL, cannot cast skill',
  },
})
