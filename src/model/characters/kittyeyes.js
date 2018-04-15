import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Kittyeyes from './base/Kittyeyes'

export const kittyeyes_n = new Kittyeyes({
  tier: n,
  title: 'Cat Burglar',
  passive: {
    name: 'Cheshire Hire',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Curiosity Killer',
    description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 7)',
  },
  b1: {
    name: 'Start From Scratch',
    description: 'True Damage (:crossed_swords: x 0.5) random enemy',
  },
  b2: {
    name: 'Scratch That',
    description: 'True Damage (:crossed_swords: x 1) selected enemy',
  },
  b4: {
    name: 'Cat Scratch Fever',
    description: 'True Damage (:crossed_swords: x 1) all enemies',
  },
})
export const kittyeyes_r = new Kittyeyes({
  tier: r,
  title: 'Darling Thief',
  passive: {
    name: 'Cheshire Hire',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Curiosity Killer',
    description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 7)',
  },
  b1: {
    name: 'Start From Scratch',
    description: 'True Damage (:crossed_swords: x 0.5) random enemy',
  },
  b2: {
    name: 'Scratch That',
    description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
  },
  b4: {
    name: 'Cat Scratch Fever',
    description: 'True Damage (:crossed_swords: x 1) all enemies',
  },
})
export const kittyeyes_sr = new Kittyeyes({
  tier: sr,
  title: 'Meadow Mercenary',
  passive: {
    name: 'Cheshire Hire',
    description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed swords: x 0.2), grant :VUL',
  },
  advisor: {
    name: 'Curiosity Killer',
    description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 6)',
  },
  b1: {
    name: 'Start From Scratch',
    description: 'True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag',
  },
  b2: {
    name: 'Scratch That',
    description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
  },
  b4: {
    name: 'Cat Scratch Fever',
    description: 'True Damage (:crossed_swords: x 1) all enemies',
  },
})
export const kittyeyes_ssr = new Kittyeyes({
  tier: ssr,
  title: 'Pasture Prima Donna',
  passive: {
    name: 'Cheshire Hire',
    description: 'Upon turn, target enemy with Game Tag to True Damage (:crossed swords: x 0.2), grant :VUL for 2 turns',
  },
  advisor: {
    name: 'Curiosity Killer',
    description: 'True Damage (:crossed_swords: x 1) selected enemy. (CD: 5)',
  },
  b1: {
    name: 'Start From Scratch',
    description: 'True Damage (:crossed_swords: x 0.5) random enemy, grant Game Tag',
  },
  b2: {
    name: 'Scratch That',
    description: 'True Damage (:crossed_swords: x 1) selected enemy, grant :VUL',
  },
  b4: {
    name: 'Cat Scratch Fever',
    description: 'True Damage (:crossed_swords: x 1) all enemies, grant Game Tag',
  },
})
