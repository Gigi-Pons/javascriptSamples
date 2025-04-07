//This function takes an array of items and prints a message
//for each product indicating whether it is "In Stock" or 
//"Out of Stock"

const product = [
    {item: "Short", stock: 2},
    {item: "Shirt", stock: 6},
    {item: "Shoes", stock: 0}
];

function checkStock(product) {
    for(let i=0; i<product.length; i++) {
        if(product[i].stock > 0) {
            console.log(`${product[i].item} is In Stock`);
        } else {
            console.log(`${product[i].item} is Out of Stock`);
        }
    }
}

checkStock(product);