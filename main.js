class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }
  balance() {
    let newArr = [];
    for (let i = 0; i < this.transactions.length; i++) {
      newArr.push(this.transactions[i].amount);
    }
    return newArr.reduce((x, y) => x + y);
  }
  deposit(amt) {
    if (amt > 0) {
      return this.transactions.push(new Transaction(amt));
    }
    return "Cannot deposit negative amount.";
  }
  charge(amt, payee) {
    if (this.balance() > amt) {
      return this.transactions.push(new Transaction(amt, payee));
    }
    return "Insufficient funds.";
  }
}

const newAcct = new BankAccount(123456, "Liz");
newAcct.deposit(500);
console.log(newAcct.balance());
newAcct.charge(-10, "apple");
console.log(newAcct.balance());
console.log(newAcct.transactions);
console.log(newAcct.balance());
console.log(newAcct);
