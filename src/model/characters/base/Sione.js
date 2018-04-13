import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Sione extends BaseCharacter {
  constructor(param) {
    super('sione', 'Sione', new CharStat(2100, 13863, gold), param)
  }
}

export default Sione
