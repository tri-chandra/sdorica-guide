import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Karnulla extends BaseCharacter {
  constructor(param) {
    super('karnulla', 'Karnulla', new CharStat(2100, 13863, gold), param)
  }
}

export default Karnulla
