
class CommonTeamInfo {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  printInfo()
{
  console.log(`Name: ${this.name} ID: ${this.id} Email: ${this.email}`);
}
}



module.exports = CommonTeamInfo;
