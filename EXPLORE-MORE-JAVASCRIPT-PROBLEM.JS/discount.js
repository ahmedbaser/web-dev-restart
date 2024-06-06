
/* 
1. if tricket numbers is less than 100, per ticket price: 100
2. if ticket price is more than 100, but less than 200. frist 100 ticket will be 100/ticket rest ticket will be 90 per ticket
3. if purchase more than 200 tickets
frist 100 --> 100taka
101-200 --> 90taka
200+ --> 70 taka

*/

function totalPrice(tricketQuantity) {
    const frist100Rate = 100;
    const second100Rate = 90;
    const restTicket = 70;

    if(tricketQuantity <= 100) {
        const frist100TicketPrice = tricketQuantity * 100;
        return frist100TicketPrice;
    }

   if(tricketQuantity <= 200) {
        const frist100Price = frist100Rate * 100;
        const restTicketQuantity = tricketQuantity - 100;
        const restTicketPrice = second100Rate * restTicketQuantity;
        const totalPrice = frist100Price + restTicketPrice;
        return totalPrice;
    }

    if(tricketQuantity > 200) {
        const restTicketPrice = tricketQuantity * 70;
        return restTicketPrice;
    }

   
}

const TotalTicketprice = totalPrice(200);
console.log(TotalTicketprice)
