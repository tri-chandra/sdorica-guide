import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Ned extends BaseCharacter {
  constructor(param) {
    super('ned', 'Ned', new CharStat(2520, 11342, black), param)
  }
}

export default Ned
