class BaseModifier {
  constructor(
    code = '',
    label = '',
    description = '',
    icon = '/static/ui/armor penetration_icon.png'
  ) {
    this.code = code
    this.label = label
    this.description = description
    this.icon = icon
  }
}

export default BaseModifier;
