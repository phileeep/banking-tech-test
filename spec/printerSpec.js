describe("Printer", function () {
  let transaction;
  let date;
  let printer;

  beforeEach(function () {

    account = new Account()
    printer = new Printer()
    // spyOn(window.console, 'log');
    transaction = new Transaction(10, 'debit', 10, date); 
  })

  describe('Printing the transactions', () => {
    it("should return true", function () {
    account.deposit(10)
    date = new Date();
    date.toLocaleString
    expect(printer.print(account.transactions)).toContain('             Date             || Debit || Credit || Balance')
    expect(printer.print(account.transactions)).toContain(`|| 10.00 ||        ||  10.00`)
  })})
})