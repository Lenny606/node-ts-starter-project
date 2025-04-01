import { Product, calcTotalPrice } from '../cart';

describe('Cart', () => {
    test('calcTotalPrice should calculate total price correctly', () => {
        // Arrange
        const testProducts: Product[] = [
            {
                id: 1,
                name: "Test Product 1",
                price: 10.00,
                quantity: 2
            },
            {
                id: 2, 
                name: "Test Product 2",
                price: 15.50,
                quantity: 3
            }
        ];

        // Act
        const total = calcTotalPrice(testProducts);

        // Assert
        expect(total).toBe(66.50); // (10.00 * 2) + (15.50 * 3)
    });

    test('calcTotalPrice should return 0 for empty cart', () => {
        // Arrange
        const emptyCart: Product[] = [];

        // Act
        const total = calcTotalPrice(emptyCart);

        // Assert
        expect(total).toBe(0);
    });
});
