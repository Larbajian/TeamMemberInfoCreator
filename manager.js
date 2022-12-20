const CommonTeamInfo = require("./CommonTeamInfo");

class Manager extends CommonTeamInfo {
  constructor(id, name, email, office) {
    super(id, name, email, office);
    this.office = office;
  }
  printManagerAdd() {
    console.log(this.office);
  };
}

//---------------Manager class working--------------//

const officenum = 405;

const newman = new Manager(007, 'jow', 'email', officenum);

console.log('manager');
newman.printInfo();
newman.printManagerAdd();
module.exports = Manager;