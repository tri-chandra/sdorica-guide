import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Crushfang from './base/Crushfang'

export const crushfang_r = new Crushfang({
  tier: r,
  title: 'Abe Ruthless',
  passive: {
    name: 'Run After Stun',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Battle Rattle',
    description: 'Attack (:crossed_swords: x 1.6) all enemies (CD: 12)',
  },
  b1: {
    name: 'Break Cover',
    description: 'Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE',
  },
  b2: {
    name: 'Hit The Breaks',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Break And Enter',
    description: 'Attack (:crossed_swords: x 1.6) all enemies',
  },
})
export const crushfang_sr = new Crushfang({
  tier: sr,
  sprite: 'https://i.imgur.com/kOb2zL0.png',
  title: 'Lumberjack the Ripper',
  passive: {
    name: 'Run After Stun',
    description: 'Upon 0 Armor, trigger 1 block skill 1 time.',
  },
  advisor: {
    name: 'Battle Rattle',
    description: 'Attack (:crossed_swords: x 1.6) all enemies (CD: 11)',
  },
  b1: {
    name: 'Break Cover',
    description: 'Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE',
  },
  b2: {
    name: 'Hit The Breaks',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Break And Enter',
    description: 'Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor',
  },
})
export const crushfang_ssr = new Crushfang({
  tier: ssr,
  sprite: 'https://i.imgur.com/eRhIva6.png',
  title: 'Jungle Juggernaut',
  passive: {
    name: 'Run After Stun',
    description: 'Upon 0 Armor, trigger 1 block skill 2 times.',
  },
  advisor: {
    name: 'Battle Rattle',
    description: 'Attack (:crossed_swords: x 1.6) all enemies (CD: 10)',
  },
  b1: {
    name: 'Break Cover',
    description: 'Attack (:crossed_swords: x 0.5) all enemies. Grant self :ENHANCE',
  },
  b2: {
    name: 'Hit The Breaks',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. Grant self (:crossed_swords: x 0.6) Armor',
  },
  b4: {
    name: 'Break And Enter',
    description: 'Attack (:crossed_swords: x 1.6) all enemies. Grant self (:crossed_swords: x 0.6) Armor',
  },
})
export const crushfang_skin = new Crushfang({
  tier: skin,
  sprite: 'https://i.imgur.com/zjRFkE9.png',
  title: 'Lord of the Caves',
  passive: {
    name: 'Shattered Armor',
    description: 'Upon 0 Armor, trigger 2 block skill 1 time',
  },
  advisor: {
    name: 'Declaration of War',
    description: 'Upon 0 Armor of front row ally, trigger ally 2 block skill',
  },
  b1: {
    name: 'Timber Toss',
    description: 'Attack (:crossed_swords: x 0.5) all enemies. Grant CD+1 to all characters with Armor',
  },
  b2: {
    name: 'Skull Smash',
    description: 'True Damage (:crossed_swords: x 1) front row enemy. Grant self (:crossed_swords: x 0.6) Armor',
  },
  b4: {
    name: 'Rumble In The Jungle',
    description: 'Attack (:crossed_swords: x 1.2) selected enemy, then attack all enemy characters (:crossed_swords: x 1.2). Grant self (:crossed_swords: x 0.6) Armor',
  },
})
