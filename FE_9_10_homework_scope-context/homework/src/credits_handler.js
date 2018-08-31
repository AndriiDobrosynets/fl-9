function userCard(key) {
  let balance = 100;
  let transactionLimit = 100;
  let historyLogs = [];

  let tax = 0.5;
  const HUNDRED = 100;
  function operationTime() {
    return new Date().toLocaleString('en-GB');
  }

  return {
    getCardOptions() {
      return {
        balance,
        transactionLimit,
        historyLogs,
        key
      };
    },
    putCredits(amount) {
      balance = balance + amount;
      historyLogs.push({
        operationType: 'Received credits',
        credits: amount,
        operationTime: operationTime()
      });
    },
    takeCredits(amount) {
      if (amount <= balance && amount <= transactionLimit) {
        balance = balance - amount;
        historyLogs.push({
          operationType: 'Withdrawal of credits',
          credits: amount,
          operationTime: operationTime()
        });
      } 
    },
    setTransactionLimit(amount) {
      transactionLimit = amount;

      historyLogs.push({
        operationType: 'Transaction limit change',
        credits: amount,
        operationTime: operationTime()
      });
    },

    transferCredits(amount, card) {
      const amountAndTaxes = amount * tax / HUNDRED + amount;

      if (amountAndTaxes > balance) {
        console.log('Error');
      } else {
        this.takeCredits(amountAndTaxes);
        card.putCredits(amount);
      }
    }
  };
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.CARD_LIMIT = 3;
    this.cards = new Array();
  }

  addCard() {
    if (this.cards.length < this.CARD_LIMIT) {
      this.cards.push(userCard(this.cards.length + 1));
    }
  }

  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
