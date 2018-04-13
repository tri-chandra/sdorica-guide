import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Lisa from './base/Lisa'

export const lisa_r = new Lisa({
  tier: r,
  title: 'Step Spinner',
  passive: {
    name: 'Love End War',
    description: 'If ally has :ENHANCE, increase skill power by 10% for each ally with :ENHANCE.',
  },
  advisor: {
    name: 'The Pink Imprint',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns (CD: 12)',
  },
  '1B': {
    name: 'Dancing With Costars',
    description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
  },
  '2B': {
    name: 'Care To Dance',
    description: 'Heal (:crossed_swords: x 0.54) all allies, grant :ENHANCE.',
  },
  '4B': {
    name: 'Dancing Queen',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns.',
  },
})
export const lisa_sr = new Lisa({
  tier: sr,
  title: 'Frisky Missy',
  passive: {
    name: 'Love End War',
    description: 'If ally has :ENHANCE, increase skill power by 20% for each ally with :ENHANCE.',
  },
  advisor: {
    name: 'The Pink Imprint',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns (CD: 11)',
  },
  '1B': {
    name: 'Dancing With Costars',
    description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
  },
  '2B': {
    name: 'Care To Dance',
    description: 'Heal (:crossed_swords: x 0.54) all allies, grant :ENHANCE and :VIGIL',
  },
  '4B': {
    name: 'Dancing Queen',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns.',
  },
})
export const lisa_ssr = new Lisa({
  tier: ssr,
  title: 'Show Go Girl',
  passive: {
    name: 'Love End War',
    description: 'If ally has :ENHANCE, increase skill power by 30% for each ally with :ENHANCE.',
  },
  advisor: {
    name: 'The Pink Imprint',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns (CD: 10)',
  },
  '1B': {
    name: 'Dancing With Costars',
    description: 'Grant selected ally (:crossed_swords: x 0.6) Armor and :ENHANCE for 2 turns.',
  },
  '2B': {
    name: 'Care To Dance',
    description: 'Heal (:crossed_swords: x 0.54) all allies, grant :ENHANCE and :VIGIL for 2 turns',
  },
  '4B': {
    name: 'Dancing Queen',
    description: 'Grant all allies 3 stacks :ENHANCE for 2 turns.',
  },
})
