import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Golemwalt extends BaseCharacter {
  constructor(param) {
    super('Golemwalt', new CharStat(2309, 12603, gold), param)
  }
}

export default Golemwalt
