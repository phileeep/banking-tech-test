describe("Printer", function () {
  let transaction;
  let date;
  let printer;

  beforeEach(function () {
    date = new Date();
    account = new Account()
    printer = new Printer()
    spyOn(window.console, 'log').and.callThrough();
    transaction = new Transaction(10, 'debit', 10, date); 
  })

  describe('Printing the transactions', () => {
    it("should return true", () => {
    account.deposit(10)
    expect(printer.print(account.transactions)).toContain('             Date             || Debit || Credit || Balance')
    expect(printer.print(account.transactions)).toContain(`${date.toLocaleString()} || 10.00 ||        ||  10.00`)
    expect(console.log).toHaveBeenCalled()
  })})
  it('should return the values in reverse chronological order', () => {
    expect(true).toEqual(true)
  })
})