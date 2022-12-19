const CommonTeamInfo = require("./CommonTeamInfo");

class Engineer extends CommonTeamInfo {
    constructor(id, name, email, github) {
      super(id, name, email, github);
      this.github = github;
    }
    printEngineerAdd() {
      console.log(this.github);
    }
  }