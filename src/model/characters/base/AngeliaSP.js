import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { black } from '../meta/Position'

class AngeliaSP extends BaseCharacter {
  constructor(param) {
    super('angelia', 'Angelia', new CharStat(2309, 12603, black), param)
  }
}

export default AngeliaSP
