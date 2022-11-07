class User {
  _id;
  constructor(argId, argName, argTown) {
    this._id = argId;
    this.name = argName;
    this.town = argTown;
  }

  // geteris
  get getId() {
    return `${this.name} id is ${this._id}`;
  }

  // seteris
  set setId(value) {
    //console.log("not allowed");
    //return;
    this._id = value;
  }
}

// tureti id, name, town
const u1 = new User(123, "James", "Vilnius");
u1.setId = 500;
console.log("u1 ===", u1);
console.log("u1.id ===", u1.getId);
