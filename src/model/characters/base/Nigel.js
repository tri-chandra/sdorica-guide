import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Nigel extends BaseCharacter {
  constructor(param) {
    super('nigel', 'Nigel', new CharStat(1890, 15124, gold), param)
  }
}

export default Nigel
