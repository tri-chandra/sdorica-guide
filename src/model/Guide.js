class Guide {
  constructor(
    title = '',
    description = ''
  ) {
    this.title = title
    this.description = description
    this.ownerId = ''
    this.isPublic = false
    this.team = {
      gold: {},
      black: {},
      white: {},
      advisor: {},
      guildAdvisor: {}
    }
  }
}

export default Guide
