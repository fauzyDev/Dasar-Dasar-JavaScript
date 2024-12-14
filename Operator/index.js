// Assignment Operator
// Digunakan untuk menginisiasi nilai
const name = 'Dicoding';
let location = 'Bandung';
// Digunakan untuk mengubah nilai
location = 'Jakarta';

// Arithmetic Operator 
6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2  (10 + 2); // mengembalikan 24
// Catatan
/* Tanda kurung dalam operasi aritmetika menentukan urutan operasi yang dijalankan.
    Operasi yang diberi tanda kurung akan dikalkulasi terlebih dulu. 
    Hal ini juga merupakan aturan umum dalam bidang matematika.
 */

// Comparison Operator
const a = 10;
const b = 12;
 
console.log(a < b); // output: true
console.log(a > b); // output: false

// Logical Operator
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
 
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true

// String Operator
const first = 'bekerja';
const second = 'sama';
const merged = first + second;
 
console.log(merged); // Output: bekerjasama