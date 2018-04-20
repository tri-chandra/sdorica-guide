import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class SioneSP extends BaseCharacter {
  constructor(param) {
    super('sione', 'Sione', new CharStat(2520, 11342, white), param)
  }
}

export default SioneSP
