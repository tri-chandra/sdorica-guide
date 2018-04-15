import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Aosta from './base/Aosta'

export const aosta_r = new Aosta({
  tier: r,
  title: 'Cloaker Face',
  passive: {
    name: 'Super Au Natural',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Diss Engaged',
    description: 'Clear 2 selected White blocks. (CD: 7)',
  },
  b1: {
    name: 'Fresh Flesh',
    description: 'Heal (:crossed_swords: x 1.08) selected ally. Clear 1 White block.',
  },
  b2: {
    name: 'Flesh Hook Up',
    description: 'Grant selected ally 2 stacks :ENHANCE.',
  },
  b4: {
    name: 'Win The Flesh',
    description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
  },
})
export const aosta_sr = new Aosta({
  tier: sr,
  title: 'Heart Of Marigold',
  passive: {
    name: 'Super Au Natural',
    description: 'Upon cast Heal, if target has :ENHANCE, increase Heal effect by 50%',
  },
  advisor: {
    name: 'Diss Engaged',
    description: 'Clear 2 selected White blocks. (CD: 6)',
  },
  b1: {
    name: 'Fresh Flesh',
    description: 'Heal (:crossed_swords: x 1.08) selected ally. Clear 1 White block.',
  },
  b2: {
    name: 'Flesh Hook Up',
    description: 'Grant selected ally 2 stacks :ENHANCE and 2 stacks :DMGRED. Clear 1 White block.',
  },
  b4: {
    name: 'Win The Flesh',
    description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
  },
})
export const aosta_ssr = new Aosta({
  tier: ssr,
  title: 'Mind Over Latter',
  passive: {
    name: 'Super Au Natural',
    description: 'Upon cast Heal, if target has :ENHANCE, increase Heal effect by 100%.',
  },
  advisor: {
    name: 'Diss Engaged',
    description: 'Clear 2 selected White blocks. (CD: 5)',
  },
  b1: {
    name: 'Fresh Flesh',
    description: 'Heal (:crossed_swords: x 1.35) selected ally. Clear 2 White blocks.',
  },
  b2: {
    name: 'Flesh Hook Up',
    description: 'Grant selected ally 2 stacks :ENHANCE and 2 stacks :DMGRED. Clear 1 White block.',
  },
  b4: {
    name: 'Win The Flesh',
    description: 'Grant selected ally 3 stacks :ENHANCE and 3 stacks :DMGRED.',
  },
})
export const aosta_skin = new Aosta({
  tier: skin,
  title: 'Insidious Mastery',
  passive: {
    name: 'Wishful Thinking',
    description: 'Upon death of full HP target by ally, grant ally full HP',
  },
  advisor: {
    name: 'Behind Closed Doors',
    description: 'Grant selecetd ally 2 stacks :ENHANCE, grant selected enemy 2 stacks of :VUL. (CD: 5)',
  },
  b1: {
    name: 'Double-Cross',
    description: 'Heal selected enemy to full HP, grant :STUN',
  },
  b2: {
    name: 'Fair And Square',
    description: 'Grant ally 2 stacks of :ENHANCE, grant selected enemy 2 stacks of :VUL',
  },
  b4: {
    name: 'Supreme Interference',
    description: 'Grant selected ally :ENHANCE for all turns, grant selected enemy :VUL for all turns',
  },
})
