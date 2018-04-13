import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Aosta extends BaseCharacter {
  constructor(param) {
    super('aosta', 'Aosta', new CharStat(2940, 8822, white), param)
  }
}

export default Aosta
