import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Nolva from './base/Nolva';
import { SIGUSR1 } from 'constants';

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
  '1B': {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  '2B': {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1) front row enemy',
  },
  '4B': {
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
  '1B': {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  '2B': {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
  },
  '4B': {
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
  '1B': {
    name: 'Sob Scene',
    description: 'True Damage (:crossed_swords: x 0.5) all enemies. Grant ally :VUL',
  },
  '2B': {
    name: 'Love Scene Awry',
    description: 'True Damage (:crossed_swords: x 1.5) front row enemy. Clear 1 black block',
  },
  '4B': {
    name: 'Remake A Scene',
    description: 'True Damage (:crossed_swords: x 2) all enemies. Grant ally and all enemies 3 stacks :VUL',
  },
})
