/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, name, quantity, price) {
        if (typeof id !== "number" || typeof name !== "string" || typeof quantity !== "number" || typeof price !== "number") {
            throw new Error("'id' harus number, 'name' harus string, 'quantity' harus number, 'price' harus number");
        };

        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    };

    updateDetails(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    };
    
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    };
};

// Jangan hapus kode di bawah ini!
export default Item;
