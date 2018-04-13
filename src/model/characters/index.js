import { angelia_n, angelia_r, angelia_sr, angelia_ssr, angelia_skin, angelia_sp } from './angelia'
import { aosta_r, aosta_sr, aosta_ssr, aosta_skin } from './aosta'
import { charle_r, charle_sr, charle_ssr } from './charle'
import { crushfang_r, crushfang_sr, crushfang_ssr, crushfang_skin } from './crushfang'
import { dagger_n, dagger_r, dagger_sr, dagger_ssr, dagger_skin } from './dagger'
import { dylan_n, dylan_r, dylan_sr, dylan_ssr, dylan_skin, dylan_sp } from './dylan'
import { experiment_r, experiment_sr, experiment_ssr, experiment_skin } from './experiment'
import { fatima_n, fatima_r, fatima_sr, fatima_ssr, fatima_skin } from './fatima'
import { fredrica_r, fredrica_sr, fredrica_ssr } from './fredrica'
import { golemwalt_n, golemwalt_r, golemwalt_sr, golemwalt_ssr } from './golemwalt'
import { hestia_n, hestia_r, hestia_sr, hestia_ssr } from './hestia'
import { jahan_r, jahan_sr, jahan_ssr, jahan_skin } from './jahan'
import { karnulla_n, karnulla_r, karnulla_sr, karnulla_ssr } from './karnulla'
import { kittyeyes_n, kittyeyes_r, kittyeyes_sr, kittyeyes_ssr } from './kittyeyes'
import { koll_n, koll_r, koll_sr, koll_ssr } from './koll'
import { leah_r, leah_sr, leah_ssr } from './leah'
import { lio_r, lio_sr, lio_ssr, lio_skin } from './lio'
import { lisa_r, lisa_sr, lisa_ssr } from './lisa'
import { naya_n, naya_r, naya_sr, naya_ssr } from './naya'
import { ned_n, ned_r, ned_sr, ned_ssr, ned_skin } from './ned'
import { nigel_r, nigel_sr, nigel_ssr } from './nigel'
import { nolva_r, nolva_sr, nolva_ssr } from './nolva'
import { pang_n, pang_r, pang_sr, pang_ssr } from './pang'
import { puggi_n, puggi_r, puggi_sr, puggi_ssr, puggi_skin } from './puggi'
import { roger_n, roger_r, roger_sr, roger_ssr } from './roger'
import { sharice_r, sharice_sr, sharice_ssr } from './sharice'
import { sherlock_r, sherlock_sr, sherlock_ssr } from './sherlock'
import { sione_r, sione_sr, sione_ssr, sione_skin, sione_sp } from './sione'
import { theodore_r, theodore_sr, theodore_ssr, theodore_skin } from './theodore'
import { tica_n, tica_r, tica_sr, tica_ssr } from './tica'
import { yamitsuki_r, yamitsuki_sr, yamitsuki_ssr, yamitsuki_skin } from './yamitsuki'
import { yanbo_r, yanbo_sr, yanbo_ssr, yanbo_skin } from './yanbo'


export const gold = [
  crushfang_r, crushfang_sr, crushfang_ssr, crushfang_skin,
  dylan_n, dylan_r, dylan_sr, dylan_ssr, dylan_skin,
  experiment_r, experiment_sr, experiment_ssr, experiment_skin,
  golemwalt_n, golemwalt_r, golemwalt_sr, golemwalt_ssr,
  jahan_r, jahan_sr, jahan_ssr, jahan_skin,
  karnulla_n, karnulla_r, karnulla_sr, karnulla_ssr,
  nigel_r, nigel_sr, nigel_ssr,
  pang_n, pang_r, pang_sr, pang_ssr,
  roger_n, roger_r, roger_sr, roger_ssr,
  sione_r, sione_sr, sione_ssr, sione_skin
]
export const black = [
  angelia_sp,
  charle_r, charle_sr, charle_ssr,
  dagger_n, dagger_r, dagger_sr, dagger_ssr, dagger_skin,
  dylan_sp,
  fatima_n, fatima_r, fatima_sr, fatima_ssr, fatima_skin,
  kittyeyes_n, kittyeyes_r, kittyeyes_sr, kittyeyes_ssr,
  leah_r, leah_sr, leah_ssr,
  naya_n, naya_r, naya_sr, naya_ssr,
  ned_n, ned_r, ned_sr, ned_ssr, ned_skin,
  nolva_r, nolva_sr, nolva_ssr,
  sharice_r, sharice_sr, sharice_ssr,
  yamitsuki_r, yamitsuki_sr, yamitsuki_ssr, yamitsuki_skin,
  yanbo_r, yanbo_sr, yanbo_ssr, yanbo_skin
]
export const white = [
  angelia_n, angelia_r, angelia_sr, angelia_ssr, angelia_skin,
  aosta_r, aosta_sr, aosta_ssr, aosta_skin,
  fredrica_r, fredrica_sr, fredrica_ssr,
  hestia_n, hestia_r, hestia_sr, hestia_ssr,
  koll_n, koll_r, koll_sr, koll_ssr,
  lio_r, lio_sr, lio_ssr, lio_skin,
  lisa_r, lisa_sr, lisa_ssr,
  puggi_n, puggi_r, puggi_sr, puggi_ssr, puggi_skin,
  sherlock_r, sherlock_sr, sherlock_ssr,
  sione_sp,
  theodore_r, theodore_sr, theodore_ssr, theodore_skin,
  tica_n, tica_r, tica_sr, tica_ssr
]
export const advisor = [
  ...gold,
  ...black,
  ...white
]
export const guidAdvisor = [
  ...gold,
  ...black,
  ...white
]
export default {
  white,
  black,
  gold,
  advisor,
  guidAdvisor,
}
