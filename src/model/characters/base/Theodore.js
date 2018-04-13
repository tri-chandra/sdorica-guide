import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Theodore extends BaseCharacter {
  constructor(param) {
    super('Theodore', new CharStat(2309, 12603, white), param)
  }
}

export default Theodore
