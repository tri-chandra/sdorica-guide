import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Puggi extends BaseCharacter {
  constructor(param) {
    super('puggi', 'Puggi', new CharStat(2309, 12603, white), param)
  }
}

export default Puggi
