import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Yanbo extends BaseCharacter {
  constructor(param) {
    super('yanbo', 'Yan bo', new CharStat(2940, 8822, black), param)
  }
}

export default Yanbo
