export interface Product { 
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export const calcTotalPrice = (products : Product[]): number => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);

}