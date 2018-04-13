import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Lisa extends BaseCharacter {
  constructor(param) {
    super('lisa', 'Lisa', new CharStat(2520, 11342, white), param)
  }
}

export default Lisa
