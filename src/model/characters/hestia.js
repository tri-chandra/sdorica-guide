import { n, r, sr, ssr } from '@/model/characters/meta/Tier'
import Hestia from './base/Hestia';

export const hesia_n = new Hestia({
  tier: n,
  title: 'Splash Sprite',
  passive: {
    name: 'Happy Harmony',
    description: 'Upon Tier R, unlock passive skill',
  },
  advisor: {
    name: 'Magic Melody',
    description: 'Remove all debuffs from selected ally. (CD: 5)',
  },
  '1B': {
    name: 'Etude Chords',
    description: 'Heal (:crossed_swords: x 1.08) selected ally, grant :REGEN.',
  },
  '2B': {
    name: 'Serenade Chords',
    description: 'Heal (:crossed_swords: x 1.26) selected ally',
  },
  '4B': {
    name: 'Variation Chords',
    description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
  },
})
export const hesia_r = new Hestia({
  tier: r,
  title: 'Aqua La Diva',
  passive: {
    name: 'Happy Harmony',
    description: 'Upon cast Heal, if target has debuff(s), grant :REGEN.',
  },
  advisor: {
    name: 'Magic Melody',
    description: 'Remove all debuffs from selected ally. (CD: 5)',
  },
  '1B': {
    name: 'Etude Chords',
    description: 'Heal (:crossed_swords: x 1.08) selected ally, grant :REGEN.',
  },
  '2B': {
    name: 'Serenade Chords',
    description: 'Heal (:crossed_swords: x 1.26) selected ally, remove debuffs.',
  },
  '4B': {
    name: 'Variation Chords',
    description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
  },
})
export const hesia_sr = new Hestia({
  tier: sr,
  title: 'Riverbank Maiden',
  passive: {
    name: 'Happy Harmony',
    description: 'Upon cast Heal, if target has debuff(s), grant :REGEN for 2 turns.',
  },
  advisor: {
    name: 'Magic Melody',
    description: 'Remove all debuffs from selected ally. (CD: 4)',
  },
  '1B': {
    name: 'Etude Chords',
    description: 'Heal (:crossed_swords: x 1.08) selected ally, grant :REGEN for 2 turns.',
  },
  '2B': {
    name: 'Serenade Chords',
    description: 'Heal (:crossed_swords: x 1.26) selected ally, remove debuffs.',
  },
  '4B': {
    name: 'Variation Chords',
    description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy.',
  },
})
export const hesia_ssr = new Hestia({
  tier: ssr,
  title: 'Bride Of The Sea',
  passive: {
    name: 'Happy Harmony',
    description: 'Upon cast Heal, if target has debuff(s), grant :REGEN for 3 turns.',
  },
  advisor: {
    name: 'Magic Melody',
    description: 'Remove all debuffs from selected ally. (CD: 3)',
  },
  '1B': {
    name: 'Etude Chords',
    description: 'Heal (:crossed_swords: x 1.08) selected ally, grant :REGEN for 2 turns.',
  },
  '2B': {
    name: 'Serenade Chords',
    description: 'Heal (:crossed_swords: x 1.26) selected ally, remove debuffs.',
  },
  '4B': {
    name: 'Variation Chords',
    description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy, heal (:crossed_swords: x 0.9) target ',
  },
})
