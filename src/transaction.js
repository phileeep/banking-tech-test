class Transaction {
  constructor(amount, type, balance, date = new Date()) {
    this.amount = amount
    this.type = type
    this.balance = balance
    this.date = date
  }
}
