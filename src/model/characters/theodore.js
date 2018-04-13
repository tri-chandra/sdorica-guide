import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Theodore from './base/Theodore'

export const theodore_r = new Theodore({
  tier: r,
  title: 'Crown the Umpire',
  passive: {
    name: 'Royal Favor',
    description: 'Upon Tier SR, unlock passive skill.',
  },
  advisor: {
    name: 'Teach And Preach',
    description: 'Grant selected ally :DMGRED for 3 turns. (CD: 7)',
  },
  '1B': {
    name: 'Sidetrack King',
    description: 'Grant selected ally Taunt for 3 turns.',
  },
  '2B': {
    name: 'King Pinned',
    description: 'Grant front row ally (:crossed_swords: x 1.8) Armor.',
  },
  '4B': {
    name: 'Merry May King',
    description: 'Grant front row ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
  },
})
export const theodore_sr = new Theodore({
  tier: sr,
  title: 'Pon De Throne',
  passive: {
    name: 'Royal Favor',
    description: 'Upon 0 Armor of front row ally, grant :DMGRED.',
  },
  advisor: {
    name: 'Teach And Preach',
    description: 'Grant selected ally :DMGRED for 3 turns. (CD: 6)',
  },
  '1B': {
    name: 'Sidetrack King',
    description: 'Grant selected ally Taunt for 3 turns.',
  },
  '2B': {
    name: 'King Pinned',
    description: 'Grant front row ally (:crossed_swords: x 1.8) Armor and :DMGRED.',
  },
  '4B': {
    name: 'Merry May King',
    description: 'Grant selected ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
  },
})
export const theodore_ssr = new Theodore({
  tier: ssr,
  title: 'Monarch Of Despair',
  passive: {
    name: 'Royal Favor',
    description: 'Upon 0 Armor of front row ally, grant :DMGRED for 2 turns.',
  },
  advisor: {
    name: 'Teach And Preach',
    description: 'Grant selected ally :DMGRED for 3 turns. (CD: 5)',
  },
  '1B': {
    name: 'Sidetrack King',
    description: 'Grant selected ally Taunt for 3 turns, trigger 1 block skill.',
  },
  '2B': {
    name: 'King Pinned',
    description: 'Grant front row ally (:crossed_swords: x 1.8) Armor and :DMGRED.',
  },
  '4B': {
    name: 'Merry May King',
    description: 'Grant selected ally (:crossed_swords: x 1.8) Armor, trigger 4 block skill.',
  },
})
export const theodore_skin = new Theodore({
  tier: skin,
  sprite: 'https://i.imgur.com/x6e3NT1.png',
  title: 'Cunning Ruler',
  passive: {
    name: 'Ruler\'s Blessing',
    description: 'Upon turn, if front row ally has over 20%/50%/80% Armor, grant ally Taunt/:TANKU/ :DMGRED.',
  },
  advisor: {
    name: 'Ruler\'s Glory',
    description: 'Grant all allies (:crossed_swords: x 0.72) Armor, grant front row ally two stacks :ENHANCE. (CD: 5)',
  },
  '1B': {
    name: 'Ruler\'s Decree',
    description: 'Grant selected ally Taunt for 3 turns, trigger 1 block skill.',
  },
  '2B': {
    name: 'Ruler\'s Fortification',
    description: 'Grant front all allies (:crossed_swords: x 0.72) Armor, grant front ally 2 stacks :ENHANCE.',
  },
  '4B': {
    name: 'Ruler\'s Consecration',
    description: 'Grant all allies (:crossed_swords: x 1.2) Armor, trigger front row ally 4 block skill.',
  },
})
