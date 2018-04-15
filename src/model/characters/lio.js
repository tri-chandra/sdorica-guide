import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Lio from './base/Lio'

export const lio_r = new Lio({
  tier: r,
  title: 'Gallant Scout',
  passive: {
    name: 'Base Booster',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Nom Nom Nutrition',
    description: 'Heal (:crossed_swords: x 1.5) selected ally. (CD: 7)',
  },
  b1: {
    name: 'Junk Food',
    description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 3 turns.',
  },
  b2: {
    name: 'Food Aid',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Food Lay Waste',
    description: 'Armor Penetration (:crossed_swords: x 2.4) back row enemy.',
  },
})
export const lio_sr = new Lio({
  tier: sr,
  title: 'Ace Cadet',
  passive: {
    name: 'Base Booster',
    description: 'Upon turn, grant self 1 stack. Upon 4 stacks, increase skill power by 50% for next skill, reset stacks.',
  },
  advisor: {
    name: 'Nom Nom Nutrition',
    description: 'Heal (:crossed_swords: x 1.5) selected ally. (CD: 6)',
  },
  b1: {
    name: 'Junk Food',
    description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH for 2 turns.',
  },
  b2: {
    name: 'Food Aid',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Food Lay Waste',
    description: 'Armor Penetration (:crossed_swords: x 2.4) back row enemy.',
  },
})
export const lio_ssr = new Lio({
  tier: ssr,
  title: 'Homeland In Security',
  passive: {
    name: 'Base Booster',
    description: 'Upon turn, grant self 1 stack. Upon 3 stacks, increase skill power by 50% for next skill, reset stacks.',
  },
  advisor: {
    name: 'Nom Nom Nutrition',
    description: 'Heal (:crossed_swords: x 1.5) selected ally. (CD: 5)',
  },
  b1: {
    name: 'Junk Food',
    description: 'Heal (:crossed_swords: x 0.9) selected ally, grant :EXH.',
  },
  b2: {
    name: 'Food Aid',
    description: 'Heal (:crossed_swords: x 1.35) selected ally.',
  },
  b4: {
    name: 'Food Lay Waste',
    description: 'Armor Penetration (:crossed_swords: x 2.4) back row enemy.',
  },
})
export const lio_skin = new Lio({
  tier: skin,
  title: 'Mandora Shooter',
  passive: {
    name: 'Well-timed Support',
    description: 'Upon start of each battle, heal allies to full HP.',
  },
  advisor: {
    name: 'Roll The Dice',
    description: "Allies' Armor Penetration skills have 30% chance to trigger target CD +1.",
  },
  b1: {
    name: 'Toxic Mandora',
    description: 'Grant selected character :POIS.',
  },
  b2: {
    name: 'Carrot Cannon',
    description: 'Armor Penetration (:crossed_swords: x 1.5) back row enemy. 50% chance to trigger target CD +1',
  },
  b4: {
    name: 'Super Mandrake',
    description: 'Armor Penetration (:crossed_swords: x 2.25) selected enemy. 50% chance to trigger target CD +3',
  },
})
