import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Charle from './base/Charle'

export const charle_r = new Charle({
  tier: r,
  title: 'Wisdom Heathen',
  passive: {
    name: 'Celeb And Flow',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Myth Buster Move',
    description: '2 blocks become black. (CD: 7)',
  },
  '1B': {
    name: 'Spell Blinder',
    description: 'Attack (:crossed_swords: x 1) random enemy',
  },
  '2B': {
    name: 'Spelling Be Done',
    description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
  },
  '4B': {
    name: 'Spellcheck Mate',
    description: 'Attack (:crossed_swords: x 1.5) all enemies',
  },
})
export const charle_sr = new Charle({
  tier: sr,
  title: 'Passionate Scholar',
  passive: {
    name: 'Celeb And Flow',
    description: 'Upon cast 2 block skill simultaneously, trigger 1 block skill 1 time',
  },
  advisor: {
    name: 'Myth Buster Move',
    description: '2 blocks become black. (CD: 6)',
  },
  '1B': {
    name: 'Spell Blinder',
    description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 block',
  },
  '2B': {
    name: 'Spelling Be Done',
    description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
  },
  '4B': {
    name: 'Spellcheck Mate',
    description: 'Attack (:crossed_swords: x 1.5) all enemies',
  },
})
export const charle_ssr = new Charle({
  tier: ssr,
  title: 'Sage The Alumni',
  passive: {
    name: 'Celeb And Flow',
    description: 'upon cast 2 block skill continuously, trigger 1 block skill 2 times',
  },
  advisor: {
    name: 'Myth Buster Move',
    description: '2 blocks become black. (CD: 5)',
  },
  '1B': {
    name: 'Spell Blinder',
    description: 'Attack (:crossed_swords: x 1) selected enemy. Clear 1 block',
  },
  '2B': {
    name: 'Spelling Be Done',
    description: 'Attack (:crossed_swords: x 1) all enemies. Clear 2 blocks',
  },
  '4B': {
    name: 'Spellcheck Mate',
    description: 'Attack (:crossed_swords: x 2) all enemies. Clear 3 blocks',
  },
})
