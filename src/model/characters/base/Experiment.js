import BaseCharacter from './core/BaseCharacter';
import CharStat from './core/CharStat';
import { GOLD } from '../../constants';

class Experiment extends BaseCharacter {
  constructor(param) {
    super('Experiment', new CharStat(2309, 12603, GOLD), param);
    this.block = this.stat.block;
  }
}

export default Experiment;
