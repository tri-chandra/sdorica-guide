import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Jahan extends BaseCharacter {
  constructor(param) {
    super('jahan', 'Jahan', new CharStat(1890, 15124, gold), param)
  }
}

export default Jahan
