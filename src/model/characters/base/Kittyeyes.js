import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class Kittyeyes extends BaseCharacter {
  constructor(param) {
    super('kittyeyes', 'Kittyeyes', new CharStat(2309, 12603, black), param)
  }
}

export default Kittyeyes
