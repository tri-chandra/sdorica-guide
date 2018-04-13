import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Dagger extends BaseCharacter {
  constructor(param) {
    super('Dagger', new CharStat(2520, 11342, black), param)
  }
}

export default Dagger
