import BaseCharacter from './BaseCharacter'
import CharStat from '../meta/CharStat'
import { gold } from '../meta/Position'

class Experiment extends BaseCharacter {
  constructor(param) {
    super('experiment', 'Experiment', new CharStat(2309, 12603, gold), param)
  }
}

export default Experiment
