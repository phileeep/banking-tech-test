'use strict';

describe("Bank", function() {
  let bank;
  let date;
  let minBalance = 0

  beforeEach(function(){
    bank = new Bank();
    date = bank.date()
  })

  describe('Bank Functions', ()=>{
    it("can deposit into the bank balance", () => {
      expect(bank.account.balance).toEqual(minBalance)
      bank.deposit(10)
      expect(bank.account.balance).toEqual(10)
    })

    it("can debit the user when requested", () => {
      bank.deposit(11)
      bank.withdraw(10)
      expect(bank.account.balance).toEqual(1)
      console.log(bank.account.balance)
    })

    it('will create a new transaction when the user deposits', () => {
      bank.deposit(10)
      expect(bank.account.transactions).toEqual([jasmine.objectContaining({
        date: date,
        withdrawal: minBalance,
        deposit: 10,
        balance: 10,
      })])
    })

    it('will throw an error if the amount deposited is 0', () => {
      expect(() => { bank.deposit(0); }).toThrowError('Cannot deposit 0');
    })

    it('will throw an error for a withdrawal if it exceeds the balance', () => {
      expect(() => { bank.withdraw(1000); }).toThrowError('Bank Balance Too Low');
    })
  })
})