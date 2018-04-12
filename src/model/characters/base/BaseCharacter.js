import Modifiers from '../meta/Modifiers';

class BaseCharacter {
  constructor(name, stat, {
    tier, title, sprite, passive, b1, b2, b4, advisor
  }) {
    this.name = name;
    this.stat = stat;

    this.displayName = `${this.name} ${tier}: ${title}`;
    this.tier = tier;
    this.sprite = sprite;
    this.passive = passive;
    this.b1 = b1;
    this.b2 = b2;
    this.b4 = b4;
    this.advisor = advisor;

    this.format = this.format;
    this.getSkillDescription = this.getSkillDescription;

    //this.setCharStatus();
  }

  static format(text, power) {
    return text.replace(/:crossed_swords: x (\d+(\.\d+)?)/g, (match, number) => {
      if (Number.isNaN(Number.parseFloat(number))) {
        return match;
      }

      return `:boom:${Number.parseInt(Number.parseFloat(number) * power, 10)}`;
    });
  }

  getSkillDescription(skill, level) {
    let offset = 0;
    if (level.startsWith('+')) {
      offset = Number.parseInt(level.substring(1), 10);
      if (!offset) offset = 0;
      else if (offset > 10) offset = 10;
      else if (offset < 0) offset = 0;
    }

    return BaseCharacter.format(this[skill].description, this.stat.power + (50 * offset));
  }

  setCharStatus() {
    this.statusObj = {};
    this.status = [];
    Modifiers.forEach((status) => {
      this.replaceSkillDescription('1B', status);
      this.replaceSkillDescription('2B', status);
      this.replaceSkillDescription('4B', status);
      this.replaceSkillDescription('advisor', status);
      this.replaceSkillDescription('passive', status);
    });

    Object.keys(this.statusObj).forEach((key) => {
      this.status.push(this.statusObj[key].description);
    });
  }
  replaceSkillDescription(tag, status) {
    this[tag] = {
      name: this[tag].name,
      description: this.insertStatusToSkillDesc(this[tag].description, status)
    };
  }
  insertStatusToSkillDesc(description, status) {
    const temp = description.split(status.code);

    if (temp.length > 1) {
      this.statusObj[status.code] = status;
    }

    return temp.join(status.label);
  }
}

export default BaseCharacter;
