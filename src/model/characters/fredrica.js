import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Fredrica from './base/Fredrica'

export const fredrica_r = new Fredrica({
  tier: r,
  title: 'Tasty Eye Candy',
  passive: {
    name: 'Reward\'s A Kiss',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Affectionate Cheer',
    description: 'Upon death of target by ally, heal ally equal to 20% of max HP',
  },
  b1: {
    name: 'Love Is Blind',
    description: 'Attack (:crossed_swords: x 0.8) selected enemy.',
  },
  b2: {
    name: 'Burning Love',
    description: 'Attack (:crossed_swords: x 0.8) all enemies.',
  },
  b4: {
    name: 'Tears Of Joy',
    description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
  },
})
export const fredrica_sr = new Fredrica({
  tier: sr,
  title: 'Drop-Dead Gorgeous',
  passive: {
    name: 'Reward\'s A Kiss',
    description: 'Upon death of target by ally, heal (:crossed_swords: x 1.08) ally.',
  },
  advisor: {
    name: 'Affectionate Cheer',
    description: 'Upon death of target by ally, heal ally equal to 25% of max HP',
  },
  b1: {
    name: 'Love Is Blind',
    description: 'Attack (:crossed_swords: x 0.8) selected enemy.',
  },
  b2: {
    name: 'Burning Love',
    description: 'Attack (:crossed_swords: x 0.8) all enemies. Grant :EXH or :STUN. ',
  },
  b4: {
    name: 'Tears Of Joy',
    description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
  },
})
export const fredrica_ssr = new Fredrica({
  tier: ssr,
  title: 'Bewitched Beauty',
  passive: {
    name: 'Reward\'s A Kiss',
    description: 'Upon death of target by ally, heal (:crossed_swords: x 1.8) ally, grant stun for 2 turns.',
  },
  advisor: {
    name: 'Affectionate Cheer',
    description: 'Upon death of target by ally, heal ally equal to 30% of max HP',
  },
  b1: {
    name: 'Love Is Blind',
    description: 'Attack (:crossed_swords: x 0.8) selected enemy. Grant :EXH or :STUN.',
  },
  b2: {
    name: 'Burning Love',
    description: 'Attack (:crossed_swords: x 0.8) all enemies. Grant :EXH or :STUN.',
  },
  b4: {
    name: 'Tears Of Joy',
    description: 'Heal (:crossed_swords: x 1.44) all allies. Clear all white blocks.',
  },
})
