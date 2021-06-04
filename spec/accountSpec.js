'use strict';

describe("Account", function () {
  let account;
  let minBalance = 0
  let date;


  beforeEach(function () {
    date = new Date();
    account = new Account(); 
  })

  describe('Account Functions', () => {
    it("should open the account balance of a user with a balance of 0", () => {
      expect(account.balance).toEqual(0)
    })

    it("should have a container to hold transactions ", () => {
      expect(account.transactions).toEqual([])
    })
  })
  
  describe('Bank Functions', () => {
    it("can deposit into the bank balance", () => {
      expect(account.balance).toEqual(minBalance)
      account.deposit(10)
      expect(account.balance).toEqual(10)
    })

    it("can debit the user when requested", () => {
      account.deposit(11)
      account.withdraw(10)
      expect(account.balance).toEqual(1)
    })

    it('will create a new transaction when the user deposits', () => {
      account.deposit(10)
      let transaction = {
        amount: 10,
        type: 'credit', 
        balance: 10,
        date: date,
      }
      expect(account.transactions).toContain(jasmine.objectContaining(transaction))
    })

    it('will throw an error if the amount deposited is 0', () => {
      expect(() => {
        account.deposit(0);
      }).toThrowError('Cannot deposit 0');
    })

    it('will throw an error for a withdrawal if it exceeds the balance', () => {
      expect(() => {
        account.withdraw(1000);
      }).toThrowError('Bank Balance Too Low');
    })
  })
})