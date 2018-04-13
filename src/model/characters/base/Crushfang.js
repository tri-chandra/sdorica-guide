import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Crushfang extends BaseCharacter {
  constructor(param) {
    super('Crushfang', new CharStat(2100, 13863, gold), param)
  }
}

export default Crushfang
