function PayPalPayment() {
  this.pay = function (amount) {
    console.log(`Paid ${amount} using PayPal.`);
  };
}

function CreditCardPayment() {
  this.pay = function (amount) {
    console.log(`Paid ${amount} using Credit Card.`);
  };
}

function PaymentContext(strategy) {
  this.strategy = strategy;
}

PaymentContext.prototype.pay = function (amount) {
  this.strategy.pay(amount);
};

const payment = new PaymentContext(new PayPalPayment());
payment.pay(100);  // Paid 100 using PayPal
