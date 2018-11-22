class Arithmetic {
  constructor() {
    this.addition = (a,b) => (a + b);
    this.subtraction = (a,b) => (a - b);
    this.multiplication = (a,b) => (a * b);
    this.division = (a,b) => (a / b);
    this.exponentiation = (a,b) => (a ** b);
    this.evolution = (a , b) => (a ** (1 / b));
  }
}

export default Arithmetic;
