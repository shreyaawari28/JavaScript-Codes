// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

let price = [250, 645, 300, 900, 50];


console.log("Initial Prices:");
for(let i of price){
    console.log(i);
}

let m =0;
console.log("Prices after applying 10% off:");
for(let val of price){
    let offer = val / 10;
    price[m]= val-offer ;
    m++;
    
}

for(let val of price){
    console.log(val);
}
