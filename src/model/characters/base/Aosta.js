import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Aosta extends BaseCharacter {
  constructor(param) {
    super('Aosta', new CharStat(2940, 8822, white), param)
  }
}

export default Aosta
