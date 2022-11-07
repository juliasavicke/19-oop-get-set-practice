class WorkingPerson {
  constructor(argFirstName, argLastName) {
    this.firstName = argFirstName;
    this.lastName = argLastName;
  }
  get email() {
    const emailString = `${this.firstName}@${this.lastName}.lt`;
    return emailString;
  }
  calcPay() {}
}
