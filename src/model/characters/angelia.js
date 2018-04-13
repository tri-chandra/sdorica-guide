import { n, r, sr, ssr, skin, sp } from '@/model/characters/meta/Tier';
import Angelia from './base/Angelia';
import AngeliaSP from './base/AngeliaSP';

export const angelia_r = new Angelia({
  tier: r,
  sprite: 'https://i.imgur.com/sT1bN2g.png',
  title: 'Shy Sweetheart',
  passive: {
    name: 'Helpful Halo',
    description: 'Upon Tier SR, unlock passive skill',
  },
  advisor: {
    name: 'Angelic Aura',
    description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)',
  },
  b1: {
    name: 'Wing and Prayer',
    description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
  },
  b2: {
    name: 'Let Us Pray',
    description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
  },
  b4: {
    name: 'Prayer Player',
    description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2 block skill',
  },
})
// export default {
//   angelia_n: new Angelia({
//     tier: n,
//     sprite: 'https://i.imgur.com/sT1bN2g.png',
//     title: 'Thy Fair Lady',
//     passive: {
//       name: 'Helpful Halo',
//       description: 'Upon Tier SR, unlock passive skill',
//     },
//     advisor: {
//       name: 'Angelic Aura',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)',
//     },
//     b1: {
//       name: 'Wing and Prayer',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
//     },
//     b2: {
//       name: 'Let Us Pray',
//       description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
//     },
//     b4: {
//       name: 'Prayer Player',
//       description: 'Heal (:crossed_swords: x 1.8) front row ally',
//     },
//   }),
//   angelia_r: new Angelia({
//     tier: r,
//     sprite: 'https://i.imgur.com/sT1bN2g.png',
//     title: 'Shy Sweetheart',
//     passive: {
//       name: 'Helpful Halo',
//       description: 'Upon Tier SR, unlock passive skill',
//     },
//     advisor: {
//       name: 'Angelic Aura',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 3)',
//     },
//     b1: {
//       name: 'Wing and Prayer',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
//     },
//     b2: {
//       name: 'Let Us Pray',
//       description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
//     },
//     b4: {
//       name: 'Prayer Player',
//       description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2 block skill',
//     },
//   }),
//   angelia_sr: new Angelia({
//     tier: sr,
//     sprite: 'https://i.imgur.com/dxxHkc0.png',
//     title: 'Unfazed Dame',
//     passive: {
//       name: 'Helpful Halo',
//       description: 'Upon cast Armor, if target has :EXH, skill power increased by 100%',
//     },
//     advisor: {
//       name: 'Angelic Aura',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 2)',
//     },
//     b1: {
//       name: 'Wing and Prayer',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
//     },
//     b2: {
//       name: 'Let Us Pray',
//       description: 'Grant all allies (:crossed_swords: x 0.72) Armor',
//     },
//     b4: {
//       name: 'Prayer Player',
//       description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2 block skill',
//     },
//   }),
//   angelia_ssr: new Angelia({
//     tier: ssr,
//     sprite: 'https://i.imgur.com/7vEcX1i.png',
//     title: 'Virtue Virtuoso',
//     passive: {
//       name: 'Helpful Halo',
//       description: 'Upon cast Armor, if target has :EXH/:VUL, increase skill power by 100%',
//     },
//     advisor: {
//       name: 'Angelic Aura',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor (CD: 1)',
//     },
//     b1: {
//       name: 'Wing and Prayer',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
//     },
//     b2: {
//       name: 'Let Us Pray',
//       description: 'Grant all allies (:crossed_swords: x 0.72) Armor, grant :DMGRED',
//     },
//     b4: {
//       name: 'Prayer Player',
//       description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 4 block skill',
//     },
//   }),
//   angelia_skin: new Angelia({
//     tier: skin,
//     sprite: 'https://i.imgur.com/sETzJmO.png',
//     title: 'Daybreak Darling',
//     passive: {
//       name: "Empress' Order",
//       description: 'Upon cast Armor, if target has :EXH/:VUL:VUL, trigger target 1 block skill',
//     },
//     advisor: {
//       name: 'For The Kingdom',
//       description: 'Trigger front row ally 1 block skill. (CD: 3)',
//     },
//     b1: {
//       name: 'Stand Tall',
//       description: 'Grant front row ally (:crossed_swords: x 0.6) Armor, trigger 1 block skill',
//     },
//     b2: {
//       name: 'Glowing Prayer',
//       description: 'Grant all allies (:crossed_swords: x 0.72) Armor and :TANKU for 2 turns',
//     },
//     b4: {
//       name: 'Luminious Radiance',
//       description: 'Heal (:crossed_swords: x 1.8) front row ally, grant :EXH, trigger 2 block skill 2 times',
//     },
//   }),
//   angelia_sp: new AngeliaSP({
//     tier: sp,
//     sprite: 'https://i.imgur.com/4rIox7p.png',
//     title: 'Enchantress of Fate',
//     passive: {
//       name: 'Be My Shield',
//       description: 'Upon 0 Armor of front row ally, grant :TANKU for 3 turns',
//     },
//     advisor: {
//       name: 'Emergency Command',
//       description: 'Grant selected ally :TANKU for 3 turns. (CD: 5)',
//     },
//     b1: {
//       name: 'Prepare For Combat',
//       description: 'Grant selected ally :TANKU for 3 turns',
//     },
//     b2: {
//       name: 'Assault Order',
//       description: 'Trigger 2 block skill of all allies with Armor',
//     },
//     b4: {
//       name: 'Annihilation Order',
//       description: 'Trigger 4 block skill of all allies with :TANKU',
//     },
//   }),
// };
