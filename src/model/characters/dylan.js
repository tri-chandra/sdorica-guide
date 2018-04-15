import { n, r, sr, ssr, skin, sp } from '@/model/characters/meta/Tier'
import Dylan from './base/Dylan'
import DylanSP from './base/DylanSP'

export const dylan_n = new Dylan({
  tier: n,
  title: 'Spark Knight',
  passive: {
    name: 'Iron Man',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'For Justice',
    description: "Allies' grant Armor effects increased by 15%",
  },
  b1: {
    name: 'Shielded Stance',
    description: 'Grant self (:crossed_swords: x 1.2) Armor',
  },
  b2: {
    name: 'Shield Your Eyes',
    description: 'Attack (:crossed_swords: x 2) front row enemy',
  },
  b4: {
    name: 'Steel Shield Steal',
    description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
  },
})
export const dylan_r = new Dylan({
  tier: r,
  title: 'Glad Die Later',
  passive: {
    name: 'Iron Man',
    description: 'Upon full Armor, trigger ally 1 block skill, grant :VUL',
  },
  advisor: {
    name: 'For Justice',
    description: "Allies' grant Armor effects increased by 20%",
  },
  b1: {
    name: 'Shielded Stance',
    description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
  },
  b2: {
    name: 'Shield Your Eyes',
    description: 'Attack (:crossed_swords: x 2) front row enemy',
  },
  b4: {
    name: 'Steel Shield Steal',
    description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
  },
})
export const dylan_sr = new Dylan({
  tier: sr,
  title: 'Renegade Repeller',
  passive: {
    name: 'Iron Man',
    description: 'Upon full Armor, trigger ally 1 block skill',
  },
  advisor: {
    name: 'For Justice',
    description: "Allies' grant Armor effects increased by 25%",
  },
  b1: {
    name: 'Shielded Stance',
    description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
  },
  b2: {
    name: 'Shield Your Eyes',
    description: 'Attack (:crossed_swords: x 2) front row enemy. If have Armor, deal additional damage, remove self Armor',
  },
  b4: {
    name: 'Steel Shield Steal',
    description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger ally 1 block skill',
  },
})
export const dylan_ssr = new Dylan({
  tier: ssr,
  title: 'Warden of War',
  passive: {
    name: 'Iron Man',
    description: "Upon full Armor, trigger all allies' 1 block skill",
  },
  advisor: {
    name: 'For Justice',
    description: "Allies' grant Armor effects increased by 30%",
  },
  b1: {
    name: 'Shielded Stance',
    description: 'Grant self (:crossed_swords: x 1.2) Armor and Taunt',
  },
  b2: {
    name: 'Shield Your Eyes',
    description: 'Attack (:crossed_swords: x 2) front row enemy. If have Armor, deal additional damage, remove self Armor',
  },
  b4: {
    name: 'Steel Shield Steal',
    description: 'Grant self (:crossed_swords: x 3.6) Armor. Trigger all ally 1 block skill',
  },
})
export const dylan_sp = new DylanSP({
  tier: sp,
  title: 'Refined Blaze',
  passive: {
    name: 'You Shall Not Pass',
    description: 'Has Taunt for all turns. Upon receive Heal, trigger 1 block skill',
  },
  advisor: {
    name: 'Indestructible Arms',
    description: 'If allies are at Full HP, increase skill power by 30%',
  },
  b1: {
    name: 'Quick Resupply',
    description: 'Heal (:crossed_swords: x 0.45) self, grant selected enemy :TEAR',
  },
  b2: {
    name: 'Burning Bash',
    description: 'Attack (:crossed_swords: x 2) front row enemy. The higher the HP this character has, the higher the damage dealt',
  },
  b4: {
    name: 'Glory To The Sun !',
    description: 'Trigger death of all enemies with lower HP than this character',
  },
})
export const dylan_skin = new Dylan({
  tier: skin,
  title: 'Obsidian Bulwark',
  passive: {
    name: 'Armor Reborn',
    description: 'Upon start of each battle, grant self full Armor',
  },
  advisor: {
    name: 'Shield Support',
    description: 'Upon start of each battle, grant front row ally full Armor',
  },
  b1: {
    name: 'Cover Command',
    description: 'Grant self (:crossed_swords: x 1.2) Armor, trigger black character 1 block skill',
  },
  b2: {
    name: 'Aegis Smash',
    description: 'Attack (:crossed_swords: x 2) front row enemy, remove self Armor. Upon cast skill, if Dylan has over 30%/60%/90% of Armor, grant target 1/2/3 stacks of :VUL for 3 turns',
  },
  b4: {
    name: 'Charge Assault',
    description: 'Grant self (:crossed_swords: x 2.4) Armor, trigger black character 4 block skill',
  },
})
