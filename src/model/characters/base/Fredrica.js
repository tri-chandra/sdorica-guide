import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Fredrica extends BaseCharacter {
  constructor(param) {
    super('Fredrica', new CharStat(2940, 8822, white), param)
  }
}

export default Fredrica
