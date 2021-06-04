class Printer {

  print(transactions) {
    let options = { 
      weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', 
        second: '2-digit' };

    let statement = '             Date             || Debit || Credit || Balance'

    transactions.reverse().forEach(transaction => {
      if (transaction.type == "credit") {
        statement += `\n ${transaction.date.toLocaleString('en-GB', options)} || ${transaction.amount.toFixed(2)} ||        ||  ${transaction.balance.toFixed(2)}`
      } else {
        statement += `\n ${transaction.date.toLocaleString('en-GB', options)} ||       || ${transaction.amount.toFixed(2)} ||  ${transaction.balance.toFixed(2)}`
      }
    })
    return statement
  }
  
}