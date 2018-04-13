import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Naya extends BaseCharacter {
  constructor(param) {
    super('naya', 'Naya', new CharStat(2729, 10081, black), param)
  }
}

export default Naya
