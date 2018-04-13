import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Sharice from './base/Sharice';
import { SIGUSR2 } from 'constants';

export const sharice_r = new Sharice({
  tier: r,
  title: 'Dunce Trooper',
  passive: {
    name: 'Now on Stage',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'I Was Just Passing By',
    description: "Upon start of each battle, trigger front row ally's 2 block skill, trigger front row enemy's skill",
  },
  '1B': {
    name: 'Suck on This',
    description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
  },
  '2B': {
    name: 'Don\'t Call Me Short',
    description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget :TEAR',
  },
  '4B': {
    name: 'G.O.A.T',
    description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant :TEAR for 2 turns',
  },
})
export const sharice_sr = new Sharice({
  tier: sr,
  title: 'Horseless Cavalry',
  passive: {
    name: 'Now on Stage',
    description: 'Upon start of each better, trigger self 2 block skill',
  },
  advisor: {
    name: 'I Was Just Passing By',
    description: "Upon start of each battle, trigger back row ally's 2 block skill, trigger back row enemy's skill",
  },
  '1B': {
    name: 'Suck on This',
    description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
  },
  '2B': {
    name: 'Don\'t Call Me Short',
    description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget :TEAR. If have :ENHANCE, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy :TEAR for 2 turns',
  },
  '4B': {
    name: 'G.O.A.T',
    description: 'Attack (:crossed_swords: x 1.4) all enemies. Grant :TEAR for 2 turns',
  },
})
export const sharice_ssr = new Sharice({
  tier: ssr,
  title: 'Size Doesn\'t Matter',
  passive: {
    name: 'Now on Stage',
    description: 'Upon start of each better, trigger self 1 block skill and 2 block skill',
  },
  advisor: {
    name: 'I Was Just Passing By',
    description: "Upon start of each battle, trigger all allies' 1 block skill, trigger all enemies' skill",
  },
  '1B': {
    name: 'Suck on This',
    description: 'Grant self 2 stacks :ENHANCE. Grant all enemies :ENHANCE',
  },
  '2B': {
    name: 'Don\'t Call Me Short',
    description: 'Attack (:crossed_swords: x 1.8) front row enemy. Grant taget :TEAR. If have :ENHANCE, Attack (:crossed_swords: x 0.2) gold position ally and (:crossed_swords: x 2) front row enemy. Grant enemy :TEAR for 2 turns',
  },
  '4B': {
    name: 'G.O.A.T',
    description: 'Attack (:crossed_swords: x 2) all enemies. Grant :TEAR for 2 turns. Then attack (:crossed_swords: x 1) gold position ally',
  },
})
