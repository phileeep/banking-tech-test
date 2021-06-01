class Bank {
  constructor() {
    this.account = new Account();
    this.transaction = {
      date: '',
      deposit: '',
      withdrawal: '',
      balance: '',
    }
  }

  deposit(balance){
    if (balance == 0) {
      throw new Error('Cannot deposit 0');
    } else {
      this.account.balance += balance
      this.newTransaction(0, balance)
      console.table(this.account.transactions)
    }
  }

  withdraw(balance){
    if ((this.account.balance - balance) < 0) {
      throw new Error('Bank Balance Too Low');
    } else {
    this.account.balance -= balance
    this.newTransaction(balance, 0)
    console.table(this.account.transactions)
    }
  }

  newTransaction = function(withdrawal, deposit){
    let userTransaction = Object.create(this.transaction);
    userTransaction.date = this.date()
    userTransaction.withdrawal = withdrawal
    userTransaction.deposit = deposit
    userTransaction.balance = this.account.balance
    this.account.transactions.push(userTransaction)
    console.log(userTransaction)
  }

  date() {
    return new Date().toLocaleString();
  }
}