function CreditCard(cvc, expirationDate, cardNumber){
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    this.cardNumber = cardNumber; 

    this.getcvc = function() {
        return cvc;
    };
    this.getexpirationDate = function() {
        return expirationDate;
    };
    this.getcardNumber = function() {
        return cardNumber;
    };
};

function CardProcessor(){
    
    this.charge = function(creditCard, amount) {
    
    const message = `Your credit Card ${creditCard.cardNumber} has been charged $${amount}`;
    console.log(message);
    };


};

var credit1 = new CreditCard(cvc= '123', expirationDate = 'March 8, 2023', cardNumber = '1234 1234 1234 1234');

console.log(credit1.cvc);
console.log(credit1.expirationDate);
console.log(credit1.cardNumber);


var cardprocessor = new CardProcessor();
cardprocessor.charge(creditCard = credit1, amount = '125');