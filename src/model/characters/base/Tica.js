import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Tica extends BaseCharacter {
  constructor(param) {
    super('tica', 'Tica', new CharStat(2520, 11342, white), param)
  }
}

export default Tica
