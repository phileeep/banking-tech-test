'use strict';

describe("Transaction", function () {
  let account;
  let transaction;
  let date;

  beforeEach(function () {
    account = new Account(); 
    date = new Date();
    transaction = new Transaction(10, 'debit', 10, date); 
  })

  describe('New Transaction', () => {
    it("can display a deposit", () => {
      spyOn(account, "deposit")
      account.deposit(10)
      expect(account.deposit).toHaveBeenCalled();  
    })
    it("A new transaction is opened with values", () => {
      let newTransaction = {
        amount: 10,
        type: 'debit', 
        balance: 10,
        date: date,
      }
      expect(transaction).toEqual(jasmine.objectContaining(newTransaction))
    })
  })
})
