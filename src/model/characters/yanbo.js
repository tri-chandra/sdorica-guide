import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Yanbo from './base/Yanbo'

export const yanbo_r = new Yanbo({
  tier: r,
  title: 'Hidden Figure',
  passive: {
    name: 'Free Spirit',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Psyche Relic',
    description: "Increase skill power of ally's 4 block skill by 20%",
  },
  b1: {
    name: 'Live On Air',
    description: 'Grant self :ENHANCE. Switch mode',
  },
  b2: {
    name: 'Dead Beat Air',
    description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
  },
  b4: {
    name: 'Airbrush Gush',
    description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
  },
})
export const yanbo_sr = new Yanbo({
  tier: sr,
  title: 'Zenith In Zen',
  passive: {
    name: 'Free Spirit',
    description: 'Upon receive Heal/Armor, remove :EXH',
  },
  advisor: {
    name: 'Psyche Relic',
    description: "Increase skill power of ally's 4 block skill by 25%",
  },
  b1: {
    name: 'Live On Air',
    description: 'Grant self :ENHANCE for 2 turns. Switch mode',
  },
  b2: {
    name: 'Dead Beat Air',
    description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
  },
  b4: {
    name: 'Airbrush Gush',
    description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
  },
})
export const yanbo_ssr = new Yanbo({
  tier: ssr,
  title: 'Celestial Mortal',
  passive: {
    name: 'Free Spirit',
    description: 'Upon receive Heal, Armor or :ENHANCE, remove :EXH',
  },
  advisor: {
    name: 'Psyche Relic',
    description: "Increase skill power of ally's 4 block skill by 30%",
  },
  b1: {
    name: 'Live On Air',
    description: 'Grant self :ENHANCE for 3 turns. Switch mode',
  },
  b2: {
    name: 'Dead Beat Air',
    description: 'If ranged offense mode, Attack (:crossed_swords: x 1) all non front row enemies. If single offense mode, Attack (:crossed_swords: x 3) front row enemy, grant self 3 stacks :EXH for 3 turns',
  },
  b4: {
    name: 'Airbrush Gush',
    description: 'Attack (:crossed_swords: x 3) front row enemy, grant :STUN',
  },
})
export const yanbo_skin = new Yanbo({
  tier: skin,
  title: 'Enlightened One',
  passive: {
    name: 'Unlimited Power',
    description: 'Upon turn, if have 5 stacks High Qi. Attack (:crossed_swords: x 1) all enemies. Upon cast 1/2/4 block skill, reset High Qi stacks',
  },
  advisor: {
    name: 'Spirit Enhancement',
    description: 'Upon Turn if front row ally has 3 stacks of any buff, trigger 2 block skill',
  },
  b1: {
    name: 'Feel The Force',
    description: 'Grant Self 1 stack High Qi',
  },
  b2: {
    name: 'Tranquil Mind',
    description: 'Grant Self 2 Stacks High Qi',
  },
  b4: {
    name: 'Deep Breathing',
    description: 'Grant self 3 stacks High Qi',
  },
})
