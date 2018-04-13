import { r, sr, ssr } from '@/model/characters/meta/Tier'
import Nigel from './base/Nigel';

export const nigel_r = new Nigel({
  tier: r,
  title: 'Hack and Clash',
  passive: {
    name: 'Stay Strong',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Come Kamikaze',
    description: 'Upon receive Armor of ally, grant self Taunt',
  },
  '1B': {
    name: 'Lead a Stray',
    description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
  },
  '2B': {
    name: 'No Loss Leader',
    description: 'Grant self (:crossed_swords: x 2.4) Armor',
  },
  '4B': {
    name: 'Follow My Lead',
    description: 'Attack (:crossed_swords: x 4) front row enemy',
  },
})
export const nigel_sr = new Nigel({
  tier: sr,
  title: 'Carved in Bone',
  passive: {
    name: 'Stay Strong',
    description: 'Upon receive Armor, grant self Taunt',
  },
  advisor: {
    name: 'Come Kamikaze',
    description: 'Upon receive Armor of ally, grant self Taunt',
  },
  '1B': {
    name: 'Lead a Stray',
    description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
  },
  '2B': {
    name: 'No Loss Leader',
    description: 'Grant self (:crossed_swords: x 2.4) Armor. If self not full HP, Heal (:crossed_swords: x 1.8) self instead',
  },
  '4B': {
    name: 'Follow My Lead',
    description: 'Attack (:crossed_swords: x 4) front row enemy',
  },
})
export const nigel_ssr = new Nigel({
  tier: ssr,
  title: 'Shockblade Scourge',
  passive: {
    name: 'Stay Strong',
    description: 'Upon receive Armor, grant self Taunt for 2 Turns',
  },
  advisor: {
    name: 'Come Kamikaze',
    description: 'Upon receive Armor of ally, grant self Taunt for 2 Turns',
  },
  '1B': {
    name: 'Lead a Stray',
    description: 'Attack (:crossed_swords: x 1) front row enemy. If target has Armor, Armor Penetration (:crossed_swords: x 0.75) target instead',
  },
  '2B': {
    name: 'No Loss Leader',
    description: 'Grant self (:crossed_swords: x 2.4) Armor. If self not full HP, Heal (:crossed_swords: x 1.8) self instead',
  },
  '4B': {
    name: 'Follow My Lead',
    description: 'Attack (:crossed_swords: x 4) front row enemy. If target less than 50% HP, increase skill power by 50% for this turn',
  },
})
