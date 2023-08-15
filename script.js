function CreditCard(cvc, expirationDate, cardNumber){
    this.cvc = cvc;
    this.expirationDate = expirationDate;
    this.cardNumber = cardNumber; 

    this.getcvc = function() {
        return this.cvc;
    };
    this.getexpirationDate = function() {
        return this.expirationDate;
    };
    this.getcardNumber = function() {
        return this.cardNumber;
    };
};

function CardProcessor(){
    
    this.charge = function(creditCard, amount) {
    
    const message = `Your credit Card ${creditCard.cardNumber} has been charged $${amount}`;
    console.log(message);
    };
};

function ProcessorInfo(){
    this.orderNumber = orderNumber;
    this.isApproved = isApproved;
    this.errorMessage = errorMessage;
    this.transDate = transDate;
    this.transTime = transTime; 


    this.getOrderNumber = function() {
        return this.orderNumber;
    };

    this.isApproved = function() {
        return this.isApproved;
    };

    this.errorMessage = function() {
        return this.errorMessage;
    };

    this.transDate = function() {
        return this.transDate;
    };

    this.transTime = function() {
        return this.transTime;
    };

};
//better to name instance of credit card related to credit card in some way, originally has user1 and still had user class
var credit1 = new CreditCard(cvc= '123', expirationDate = 'March 8, 2023', cardNumber = '1234 1234 1234 1234');

console.log(credit1.cvc);
console.log(credit1.expirationDate);
console.log(credit1.cardNumber);


var cardprocessor = new CardProcessor();
cardprocessor.charge(creditCard = credit1, amount = '125');