import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Charle extends BaseCharacter {
  constructor(param) {
    super('Charle', new CharStat(2729, 10081, black), param)
  }
}

export default Charle
