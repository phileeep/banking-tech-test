'use strict';

describe("Bank", function() {
  let bank;
  let date;

  beforeEach(function(){
    bank = new Bank();
    date = bank.date()
  })

  it("can deposit into the bank balance", () => {
    expect(bank.account.balance).toEqual(0)
    bank.deposit(10)
    expect(bank.account.balance).toEqual(10)
  })

  it("can debit the user when requested", () => {
    bank.deposit(10)
    bank.withdraw(10)
    expect(bank.account.balance).toEqual(0)
  })

  it('will create a new transaction when the user deposits', () => {
    bank.deposit(10)
    expect(bank.account.transactions).toEqual([jasmine.objectContaining({
      date: date,
      withdrawal: 0,
      deposit: 10,
      balance: 10,
    })]);
  })

})