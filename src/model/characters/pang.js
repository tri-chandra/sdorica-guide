import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Pang from './base/Pang';

export const pang_n = new Pang({
  tier: n,
  title: 'Amateur Hour',
  passive: {
    name: 'Merciless Meridians',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Acupoint Attack',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)',
  },
  '1B': {
    name: 'One Paw Man',
    description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
  },
  '2B': {
    name: 'Powerful Punch',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy',
  },
  '4B': {
    name: "Paws Won't Pause",
    description: 'Attack (:crossed_swords: x 3) front row enemy',
  },
})
export const pang_r = new Pang({
  tier: r,
  title: 'Self Made Fan',
  passive: {
    name: 'Merciless Meridians',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Acupoint Attack',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 7)',
  },
  '1B': {
    name: 'One Paw Man',
    description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
  },
  '2B': {
    name: 'Powerful Punch',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack :WINDU',
  },
  '4B': {
    name: "Paws Won't Pause",
    description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
  },
})
export const pang_sr = new Pang({
  tier: sr,
  title: 'Notice Me Sensei',
  passive: {
    name: 'Merciless Meridians',
    description: 'Upon receive :DMGRED, grant self 1 stack :WINDU',
  },
  advisor: {
    name: 'Acupoint Attack',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 6)',
  },
  '1B': {
    name: 'One Paw Man',
    description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
  },
  '2B': {
    name: 'Powerful Punch',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 stack :WINDU',
  },
  '4B': {
    name: "Paws Won't Pause",
    description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
  },
})
export const pang_ssr = new Pang({
  tier: ssr,
  title: 'Shaolin Templar',
  passive: {
    name: 'Merciless Meridians',
    description: 'Upon receive :DMGRED, grant self 1 or 2 stacks :WINDU',
  },
  advisor: {
    name: 'Acupoint Attack',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy (CD: 5)',
  },
  '1B': {
    name: 'One Paw Man',
    description: 'Attack (:crossed_swords: x 0.75) front row enemy. Grant self :DMGRED for 2 turns',
  },
  '2B': {
    name: 'Powerful Punch',
    description: 'Attack (:crossed_swords: x 1.5) front row enemy. Grant self 1 or 2 stacks :WINDU',
  },
  '4B': {
    name: "Paws Won't Pause",
    description: 'Attack (:crossed_swords: x 3) front row enemy. Grant self 2 stacks :ENHANCE for 3 turns',
  },
})
