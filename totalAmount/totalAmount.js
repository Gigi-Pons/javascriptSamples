const sales = [
    {item: "Short", quantity: 4, price: 50},
    {item: "Shirt", quantity: 5, price: 20},
    {item: "Shoes", quantity: 2, price: 110}
];

function totalSales(sales) {
    let total = 0;
    for (let i=0; i<sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}

console.log("Total sales Amount is: ", totalSales(sales));