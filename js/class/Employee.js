class Employee extends WorkingPerson {
  constructor(firstName, lastName, hourlyPay) {
    super(firstName, lastName);
    this.hourlyPay = hourlyPay;
    this.hoursWorked = 0;
  }
  work(hours) {
    this.hoursWorked += hours;
  }
  calcPay() {
    return this.hoursWorked * this.hourlyPay;
  }
  payForWork() {
    const pay = this.calcPay();
    this.hoursWorked = 0;
    console.log("employee after pay: ", this);
    return pay;
  }
}
