import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class DylanSP extends BaseCharacter {
  constructor(param) {
    super('dylan', 'Dylan', new CharStat(2309, 12603, black), param)
  }
}

export default DylanSP
