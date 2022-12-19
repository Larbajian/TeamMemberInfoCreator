const CommonTeamInfo = require("./CommonTeamInfo");

class Manager extends CommonTeamInfo {
  constructor(id, name, email, office) {
    super(id, name, email, office);
    this.office = office;
  }
}

class Engineer extends CommonTeamInfo {
  constructor(id, name, email, github) {
    super(id, name, email, github);
    this.github = github;
  }
}

class Intern extends CommonTeamInfo {
    constructor (id, name, email, school) {
        this.school = school;
    }
}
