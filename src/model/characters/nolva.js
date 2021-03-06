import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Nolva from './base/Nolva'

export const nolva_r = new Nolva({
  tier: r,
  title: 'Coin Operated Toy',
  passive: {
    name: 'For Gig Goals',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Incur Mission',
    description: 'Clear 4 selected black blocks. (CD: 7)',
  },
  b1: {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  b2: {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1) front row enemy',
  },
  b4: {
    name: 'Remake A Scene',
    description: 'True Damage (:crossed_swords: x 1) all enemies',
  },
})
export const nolva_sr = new Nolva({
  tier: sr,
  title: 'Doll Housekeeper',
  passive: {
    name: 'For Gig Goals',
    description: 'If any character has :VUL, increase self skill power by 15% for each character present',
  },
  advisor: {
    name: 'Incur Mission',
    description: 'Clear 4 selected black blocks. (CD: 6)',
  },
  b1: {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  b2: {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
  },
  b4: {
    name: 'Remake A Scene',
    description: 'True Damage (:crossed_swords: x 1) all enemies',
  },
})
export const nolva_ssr = new Nolva({
  tier: ssr,
  title: 'Muppet Artiste',
  passive: {
    name: 'For Gig Goals',
    description: 'If any character has :VUL, increase self skill power by 20% for each character present',
  },
  advisor: {
    name: 'Incur Mission',
    description: 'Clear 4 selected black blocks. (CD: 5)',
  },
  b1: {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  b2: {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
  },
  b4: {
    name: 'Remake A Scene',
    description: 'True Damage (:crossed_swords: x 2) all enemies. Grant ally and all enemies 3 stacks :VUL',
  },
})
