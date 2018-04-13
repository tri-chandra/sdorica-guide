import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Fatima extends BaseCharacter {
  constructor(param) {
    super('fatima', 'Fatima', new CharStat(2940, 8822, black), param)
  }
}

export default Fatima
