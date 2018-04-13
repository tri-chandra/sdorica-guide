import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Dylan extends BaseCharacter {
  constructor(param) {
    super('Dylan', new CharStat(1890, 15124, gold), param)
  }
}

export default Dylan
