const phones = [
    {name: 'Sumsung', camera: 12, Storage:'32', price: 36000, color:'sliver'},
    {name: 'Walton', camera: 12, Storage:'32', price: 22000, color:'sliver'},
    {name: 'Iphone', camera: 12, Storage:'32', price: 82000, color:'sliver'},
    {name: 'Nokia', camera: 12, Storage:'32', price: 44000, color:'sliver'}
];


function cheapstPhone(phones) {
    let cheapst = phones[0];
 for(let i = 0; i < phones.length; i++) {
    const phone = phones[i];
   if(phone.price < cheapst.price) {
    cheapst = phone;
   }
 }
 return cheapst;
} 

const mySelection = cheapstPhone(phones); 
console.log(mySelection);  