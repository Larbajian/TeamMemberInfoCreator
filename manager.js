const CommonTeamInfo = require("./CommonTeamInfo");

class Manager extends CommonTeamInfo {
  constructor(id, name, email, office) {
    super(id, name, email, office);
    this.office = office;
  }
  printManagerAdd() {
    console.log(this.office);
  }
}

