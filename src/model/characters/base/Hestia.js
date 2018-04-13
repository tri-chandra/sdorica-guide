import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Hestia extends BaseCharacter {
  constructor(param) {
    super('Hestia', new CharStat(1890, 15124, white), param)
  }
}

export default Hestia
