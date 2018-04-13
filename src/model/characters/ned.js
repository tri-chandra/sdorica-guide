import { n, r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Ned from './base/Ned';

export const ned_n = new Ned({
  tier: n,
  title: 'Lone Ranger',
  passive: {
    name: 'What\'s For Desert',
    description: 'Upon Tier R, unlock passive skill',
  },
  advisor: {
    name: 'Up To Parched',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. (CD: 7)',
  },
  '1B': {
    name: 'Tamper Sand',
    description: 'Grant self :RAVE',
  },
  '2B': {
    name: 'Quick Sand',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. If have :RAVE, Attack (:crossed_swords: x 2.25) random enemy instead',
  },
  '4B': {
    name: 'Delude Sandstorm',
    description: 'Attack (:crossed_swords: x 3) selected enemy. If have :RAVE, Attack (:crossed_swords: x 4.5) random enemy instead',
  },
})
export const ned_r = new Ned({
  tier: r,
  title: 'Dune Chaser',
  passive: {
    name: 'What\'s For Desert',
    description: 'Upon death of any character, grant self :RAVE',
  },
  advisor: {
    name: 'Up To Parched',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. (CD: 7)',
  },
  '1B': {
    name: 'Tamper Sand',
    description: 'Grant self :RAVE for 3 turns',
  },
  '2B': {
    name: 'Quick Sand',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. If have :RAVE, Attack (:crossed_swords: x 2.25) random enemy instead',
  },
  '4B': {
    name: 'Delude Sandstorm',
    description: 'Attack (:crossed_swords: x 3) selected enemy. If have :RAVE, Attack (:crossed_swords: x 4.5) random enemy instead',
  },
})
export const ned_sr = new Ned({
  tier: sr,
  title: 'Horror Harvester',
  passive: {
    name: 'What\'s For Desert',
    description: 'Upon death of any character, grant self :RAVE for 2 turns',
  },
  advisor: {
    name: 'Up To Parched',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. (CD: 6)',
  },
  '1B': {
    name: 'Tamper Sand',
    description: 'Grant self :RAVE for 3 turns',
  },
  '2B': {
    name: 'Quick Sand',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. If target less than 50% HP, increase skll power by 50% for this turn. If have :RAVE, Attack (:crossed_swords: x 2.25) random enemy instead',
  },
  '4B': {
    name: 'Delude Sandstorm',
    description: 'Attack (:crossed_swords: x 3) selected enemy. If have :RAVE, Attack (:crossed_swords: x 4.5) random enemy instead',
  },
})
export const ned_ssr = new Ned({
  tier: ssr,
  title: 'Death Collector',
  passive: {
    name: 'What\'s For Desert',
    description: 'Upon death of any character, grant self :RAVE for 3 turns',
  },
  advisor: {
    name: 'Up To Parched',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. (CD: 5)',
  },
  '1B': {
    name: 'Tamper Sand',
    description: 'Grant self :RAVE for 3 turns',
  },
  '2B': {
    name: 'Quick Sand',
    description: 'Attack (:crossed_swords: x 1.5) selected enemy. If target less than 50% HP, increase skll power by 50% for this turn. If have :RAVE, Attack (:crossed_swords: x 2.25) random enemy instead',
  },
  '4B': {
    name: 'Delude Sandstorm',
    description: 'Attack (:crossed_swords: x 3) selected enemy. If not trigger death of target, trigger self 2 block skill 1 time. If have :RAVE, Attack (:crossed_swords: x 4.5) random enemy instead',
  },
})
export const ned_skin = new Ned({
  tier: skin,
  title: 'Azure Predator',
  passive: {
    name: 'Mind of a Hunter',
    description: 'Upon receive :ENHANCE, cast Attack (:crossed_swords: x 0.5) that grant all characters :TEAR',
  },
  advisor: {
    name: 'Predator\'s Imprint',
    description: "Allies' Attack skills grant target :TEAR",
  },
  '1B': {
    name: 'Blazing Soul',
    description: 'Grant self :ENHANCE for 3 turns',
  },
  '2B': {
    name: 'Deadly Pursuit',
    description: 'Attack (:crossed_swords: x 1.8) back row enemy. Grant :TEAR for 3 turns',
  },
  '4B': {
    name: 'Designated Target',
    description: 'Attack (:crossed_swords: x 3) selected enemy. Grant :TEAR for all turns',
  },
})
