import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Leah extends BaseCharacter {
  constructor(param) {
    super('Leah', new CharStat(2729, 10081, black), param)
  }
}

export default Leah
