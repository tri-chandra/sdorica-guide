import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Koll extends BaseCharacter {
  constructor(param) {
    super('Koll', new CharStat(2100, 13863, white), param)
  }
}

export default Koll
