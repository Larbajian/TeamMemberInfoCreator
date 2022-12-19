class CommonTeamInfo {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

printCommonTeamInfo() {
  console.log(`Name: ${this.name}/n ID: ${this.id}/n Email: ${this.email}`);
}


module.exports = CommonTeamInfo;

