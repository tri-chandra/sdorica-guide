import BaseModifier from "./BaseModifier"

export const exhaust = new BaseModifier(
  ':EXH',
  'Exhaust',
  'Exhaust: Decrease skill power by 30% for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const damage_reduction = new BaseModifier(
  ':DMGRED',
  'Damage Reduction',
  'Damage Reduction: Upon incoming damage skill, decrease damage taken by 30% for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const vulnerability = new BaseModifier(
  ':VUL',
  'Vulnerability',
  'Vulnerability: Upon incoming damage skill, increase damage taken by 30% for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)

export const tank_up = new BaseModifier(
  ':TANKU',
  'Tank Up',
  'Tank Up: Upon incoming damage skill, grant self Armor equal to 10% max Armor for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const enhance = new BaseModifier(
  ':ENHANCE',
  'Enhance',
  'Enhance: Increase skill power by 30% for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const tear = new BaseModifier(
  ':TEAR',
  'Tear',
  'Tear: Upon cast skill, lose 10% current HP for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const shock_lock = new BaseModifier(
  ':SHOCKL',
  'Shock Lock',
  'Shock Lock: Upon turn, grant self 3 stacks Vulnerability and Exhaust',
  '/static/ui/armor penetration_icon.png'
)
export const regen = new BaseModifier(
  ':REGEN',
  'Regen',
  'Regen: Upon turn, heal self 10% max HP for each stack. 3 stacks max. Remove upon incoming damage skill',
  '/static/ui/armor penetration_icon.png'
)
export const poison = new BaseModifier(
  ':POIS',
  'Poison',
  'Poison: Upon turn, lose 10% of current HP for each stack. 3 stacks max. Remove upon receive Heal',
  '/static/ui/armor penetration_icon.png'
)
export const vigilance = new BaseModifier(
  ':VIGIL',
  'Vigilance',
  'Vigilance: Upon incoming damage skill, 30% chance to evade damage for each stack. 3 stacks max',
  '/static/ui/armor penetration_icon.png'
)
export const wind_up = new BaseModifier(
  ':WINDU',
  'Winded Up',
  'Winded Up: Upon 4 stacks, grant 1 extra attack for next skill',
  '/static/ui/armor penetration_icon.png'
)
export const stun = new BaseModifier(
  ':STUN',
  'Stun',
  'Stun: Can\'t cast skill. Remove upon incoming damage skill',
  '/static/ui/armor penetration_icon.png'
)
export const reflect = new BaseModifier(
  ':REFLECT',
  'Reflect',
  'Reflect: Upon incoming damage skill, attacker takes damage equal to the amount of Armor lost',
  '/static/ui/armor penetration_icon.png'
)
export const rant_rave = new BaseModifier(
  ':RAVE',
  'Rant Rave',
  'Rant Rave: Select random enemy to Attack instead, increase skill power by 50%',
  '/static/ui/armor penetration_icon.png'
)
export const taunt = new BaseModifier(
  ':TAUNT',
  'Taunt',
  'Taunt: TBD',
  '/static/ui/armor penetration_icon.png'
)

export default {
  damage_reduction,
  enhance,
  exhaust,
  poison,
  rant_rave,
  reflect,
  regen,
  shock_lock,
  stun,
  tank_up,
  taunt,
  tear,
  vigilance,
  vulnerability,
  wind_up
}
