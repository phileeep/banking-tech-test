class Account {
  constructor() {
    this.balance = 0
    this.transactions = [];
  }

  deposit(amount){
    if (amount == 0) {
      throw new Error('Cannot deposit 0');
    } else {
      this.balance += amount
      this.transactions.push(new Transaction(amount, 'credit', this.balance))
    }
  }

  withdraw(amount){
    if ((this.balance - amount) < 0) {
      throw new Error('Bank Balance Too Low');
    } else {
      this.balance -= amount
      this.transactions.push(new Transaction(-amount, 'debit', this.balance))
    }
  }
}

