import { log } from "console";
import { calcTotalPrice, Product } from "./cart";

const cart : Product[] =  [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        quantity: 2
    },
    {
        id: 2,
        name: "Product 2", 
        price: 24.99,
        quantity: 1
    },
    {
        id: 3,
        name: "Product 3",
        price: 5.99,
        quantity: 3
    }

]

console.log("Total Price is " , calcTotalPrice(cart));
