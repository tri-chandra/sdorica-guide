import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Pang extends BaseCharacter {
  constructor(param) {
    super('pang', 'Pang', new CharStat(2100, 13863, gold), param)
  }
}

export default Pang
