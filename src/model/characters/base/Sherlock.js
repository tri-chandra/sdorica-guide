import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { white } from '../meta/Position'

class Sherlock extends BaseCharacter {
  constructor(param) {
    super('sherlock', 'Sherlock', new CharStat(2729, 10081, white), param)
  }
}

export default Sherlock
