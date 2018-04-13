import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Angelia extends BaseCharacter {
  constructor(param) {
    super('angelia', 'Angelia', new CharStat(2729, 10081, white), param)
  }
}

export default Angelia
