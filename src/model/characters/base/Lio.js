import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Lio extends BaseCharacter {
  constructor(param) {
    super('lio', 'Lio', new CharStat(2520, 11342, white), param)
  }
}

export default Lio
