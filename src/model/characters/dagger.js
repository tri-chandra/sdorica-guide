import { n, r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Dagger from './base/Dagger'

export const dagger_n = new Dagger({
  tier: n,
  title: 'Slam Punk',
  passive: {
      name: 'Hibernating Hate',
      description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
      name: 'Death Dance',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 7)',
  },
  b1: {
      name: 'Bear A Grudge',
      description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1.',
  },
  b2: {
      name: 'Bear Hug',
      description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
      name: 'Bearly Alive',
      description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies',
  },
})
export const dagger_r = new Dagger({
  tier: r,
  title: 'Foolhardy Animal',
  passive: {
    name: 'Hibernating Hate',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Death Dance',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 7)',
  },
  b1: {
    name: 'Bear A Grudge',
    description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1',
  },
  b2: {
    name: 'Bear Hug',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy',
  },
  b4: {
    name: 'Bearly Alive',
    description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
  },
})
export const dagger_sr = new Dagger({
  tier: sr,
  title: 'Diehard Dustbiter',
  passive: {
    name: 'Hibernating Hate',
    description: 'Upon death of gold character, grant self :ENHANCE',
  },
  advisor: {
    name: 'Death Dance',
    description: 'Armor Penetration (:crossed_sword: x 1.5) front row enemy. (CD: 6)',
  },
  b1: {
    name: 'Bear A Grudge',
    description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1',
  },
  b2: {
    name: 'Bear Hug',
    description: 'Armor Penetration (:crossed_swords: x 1.5) Grant self :ENHANCE for 2 turns',
  },
  b4: {
    name: 'Bearly Alive',
    description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
  },
})
export const dagger_ssr = new Dagger({
  tier: ssr,
  title: 'Grizzly Guerrilla',
  passive: {
    name: 'Hibernating Hate',
    description: 'Upon death of gold character, grant self :ENHANCE for 2 turns',
  },
  advisor: {
    name: 'Death Dance',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. (CD: 5)',
  },
  b1: {
    name: 'Bear A Grudge',
    description: 'Armor Penetration (:crossed_swords: x 0.6) front row enemy. 50% chance to trigger target CD +1, 100% if self has :ENHANCE.',
  },
  b2: {
    name: 'Bear Hug',
    description: 'Armor Penetration (:crossed_swords: x 1.5) front row enemy. Grant self :ENHANCE for 2 turns.',
  },
  b4: {
    name: 'Bearly Alive',
    description: 'Armor Penetration (:crossed_swords: x 1.2) all enemies. Grant self :ENHANCE for 2 turns',
  },
})
export const dagger_skin = new Dagger({
  tier: skin,
  title: 'Camouflaged Vanguard',
  passive: {
    name: 'Tactical Enhance',
    description: 'Upon cast skill by ally, if enemy CD is altered, grant :ENHANCE for 2 turns',
  },
  advisor: {
    name: 'Night Watcher',
    description: 'Upon cast skill by ally, if enemy CD is altered, grant :ENHANCE for 2 turns',
  },
  b1: {
    name: 'Cloaked Ambush',
    description: 'Armor Penetration (:crossed_swords: x 0.375) front row enemy. If target is at CD:1, grant CD +1',
  },
  b2: {
    name: 'Fishstone Blaster',
    description: 'Armor Penetration (:crossed_swords: x 1.125) selected enemy. If target is at CD:1, grant CD +1',
  },
  b4: {
    name: 'Eat My Fish!',
    description: 'Armor Penetration (:crossed_swords: x 1.125) all enemies. If target is at CD:1, grant :STUN',
  },
})
