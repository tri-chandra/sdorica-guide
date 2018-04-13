import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Sharice extends BaseCharacter {
  constructor(param) {
    super('Sharice', new CharStat(2520, 11342, black), param)
  }
}

export default Sharice
