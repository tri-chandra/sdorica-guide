import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Nolva extends BaseCharacter {
  constructor(param) {
    super('Nolva', new CharStat(2100, 11342, black), param)
  }
}

export default Nolva
