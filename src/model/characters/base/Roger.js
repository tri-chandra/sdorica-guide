import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Roger extends BaseCharacter {
  constructor(param) {
    super('roger', 'Roger', new CharStat(2520, 11342, gold), param)
  }
}

export default Roger
