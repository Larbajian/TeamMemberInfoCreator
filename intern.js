const CommonTeamInfo = require("./CommonTeamInfo");

class Intern extends CommonTeamInfo {
    constructor(id, name, email, school) {
      this.school = school;
    }
    printInternAdd() {
      console.log(this.school);
    }
  }
  