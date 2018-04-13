import { r, sr, ssr, skin } from '@/model/characters/meta/Tier'
import Yamitsuki from './base/Yamitsuki'

export const yamitsuki_r = new Yamitsuki({
  tier: r,
  title: 'Shadow Walker',
  passive: {
    name: 'Insult To Injury',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'After Dark',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 7)',
  },
  '1B': {
    name: 'Just Beat It',
    description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
  },
  '2B': {
    name: 'Beat The Hush',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy',
  },
  '4B': {
    name: 'Beat And Defeat',
    description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy',
  },
})
export const yamitsuki_sr = new Yamitsuki({
  tier: sr,
  title: 'Nevermore Ninja',
  passive: {
    name: 'Insult To Injury',
    description: 'Upon cast damage skill, if target has :VUL, increase skill power by 50% for this turn',
  },
  advisor: {
    name: 'After Dark',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 6)',
  },
  '1B': {
    name: 'Just Beat It',
    description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
  },
  '2B': {
    name: 'Beat The Hush',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy, remove :ENHANCE and :VIGIL',
  },
  '4B': {
    name: 'Beat And Defeat',
    description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy',
  },
})
export const yamitsuki_ssr = new Yamitsuki({
  tier: ssr,
  title: 'Twin Of Twilight',
  passive: {
    name: 'Insult To Injury',
    description: 'Upon cast damage skill, if target has :VUL/:EXH, increase skill power by 50% for this turn',
  },
  advisor: {
    name: 'After Dark',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. (CD: 5)',
  },
  '1B': {
    name: 'Just Beat It',
    description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy, remove Taunt and :DMGRED',
  },
  '2B': {
    name: 'Beat The Hush',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy, remove :ENHANCE and :VIGIL',
  },
  '4B': {
    name: 'Beat And Defeat',
    description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant 2 stacks :VUL and 2 stacks :EXH for 2 turns',
  },
})
export const yamitsuki_skin = new Yamitsuki({
  tier: skin,
  title: 'Dawnblade Killer',
  passive: {
    name: 'In Broad Daylight',
    description: 'Upon turn, if have both :ENHANCE and :DMGRED, trigger self 1-orb skill',
  },
  advisor: {
    name: 'Suspicious Shadow',
    description: 'Upon turn, if ally has both :ENHANCE and :DMGRED, trigger 1-orb skill',
  },
  '1B': {
    name: 'Dawn Of Judgement',
    description: 'Armor Penetration (:crossed_swords: x 0.6) selected enemy. If target has :DMGRED, copy 1 stack of it for 6 turns',
  },
  '2B': {
    name: 'Conviction Verdict',
    description: 'Armor Penetration (:crossed_swords: x 1.35) selected enemy. If target has :ENHANCE, copy 1 stack of it for 6 turns',
  },
  '4B': {
    name: 'Acquittal Declared',
    description: 'Armor Penetration (:crossed_swords: x 2.4) selected enemy, grant self :ENHANCE and :DMGRED for 3 turns',
  },
})
