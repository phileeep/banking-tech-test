'use strict';

describe("Account", function () {
  let account;

  beforeEach(function () {
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
})