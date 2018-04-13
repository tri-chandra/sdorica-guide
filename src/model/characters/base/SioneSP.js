import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class SioneSP extends BaseCharacter {
  constructor(param) {
    super('Sione', new CharStat(2520, 11342, black), param)
  }
}

export default SioneSP
