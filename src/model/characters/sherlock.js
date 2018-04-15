import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Sherlock from './base/Sherlock'

export const sherlock_r = new Sherlock({
  tier: r,
  title: 'Sly Trader',
  passive: {
    name: 'Transformer Horror',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Avant Guard',
    description: 'Grant selected ally (:crossed_swords: x 1.8) Armor. (CD: 7)',
  },
  b1: {
    name: 'Go Command Pro',
    description: 'If offense mode, switch to support mode, clear all black blocks. If support mode, switch to offense mode, clear all gold blocks',
  },
  b2: {
    name: 'Command No. 42',
    description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor.',
  },
  b4: {
    name: 'Command No. 66',
    description: 'If offense mode, Attack (:crossed_swords: x 3) selected enemy. If support mode, Heal (:crossed_swords: x 2.7) selected ally.',
  },
})
export const sherlock_sr = new Sherlock({
  tier: sr,
  title: 'Mean Moneybags',
  passive: {
    name: 'Transformer Horror',
    description: 'Upon cast skill by ally, if block board is altered, grant :ENHANCE.',
  },
  advisor: {
    name: 'Avant Guard',
    description: 'Grant selected ally (:crossed_swords: x 1.8) Armor. (CD: 6)',
  },
  b1: {
    name: 'Go Command Pro',
    description: 'If offense mode, switch to support mode, clear all black blocks. If support mode, switch to offense mode, clear all gold blocks',
  },
  b2: {
    name: 'Command No. 42',
    description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy, grant :VUL for 2 turns. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor.',
  },
  b4: {
    name: 'Command No. 66',
    description: 'If offense mode, Attack (:crossed_swords: x 3) selected enemy. If support mode, Heal (:crossed_swords: x 2.7) selected ally.',
  },
})
export const sherlock_ssr = new Sherlock({
  tier: ssr,
  title: 'Profit Prophet',
  passive: {
    name: 'Transformer Horror',
    description: 'Upon cast skill by ally, if block board is altered, grant :ENHANCE for 2 turns.',
  },
  advisor: {
    name: 'Avant Guard',
    description: 'Grant selected ally (:crossed_swords: x 1.8) Armor. (CD: 5)',
  },
  b1: {
    name: 'Go Command Pro',
    description: 'If offense mode, switch to support mode, clear all black blocks. If support mode, switch to offense mode, clear all gold blocks',
  },
  b2: {
    name: 'Command No. 42',
    description: 'If offense mode, Armor Penetration (:crossed_swords: x 1.125) selected enemy, grant :VUL for 2 turns. If support mode, grant selected ally (:crossed_swords: x 1.8) Armor and :TANKU for 2 turns.',
  },
  b4: {
    name: 'Command No. 66',
    description: 'If offense mode, Attack (:crossed_swords: x 3) selected enemy. If support mode, Heal (:crossed_swords: x 2.7) selected ally.',
  },
})
