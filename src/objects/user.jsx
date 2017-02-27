export default class User {


  constructor(id){
    this.id = id;
  }

  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }

  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

}
