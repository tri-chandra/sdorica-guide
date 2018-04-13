import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Yamitsuki extends BaseCharacter {
  constructor(param) {
    super('yamitsuki', 'Yamitsuki', new CharStat(2940, 8822, black), param)
  }
}

export default Yamitsuki
