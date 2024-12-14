// Loop
for (kondisi;;) {
    // kode
}

let nilai = 15;
for ( let nilai = 1; nilai <= 10; nilai++) {
    console.log(nilai) // Akan berhenti di angka 10 
}

let number = 15;
for ( let number = 0; number < 15; number++) {
    console.log(number) // Akan berhenti di angka 14
}

const ArrayString = ["apel", 5, "buah"]
for ( let i = 0; i < ArrayString.length; i++) {
    console.log(ArrayString[i]) // menghitung panjang data Array 
}

// While
while (kondisi) {
    // kode
}

let a = 0;
while (a < 5) {
    console.log(a); // Output: 0, 1, 2, 3, 4
    i++;    
    /*  catatan:
        Digunakan untuk mengeksekusi blok kode selama kondisi tertentu bernilai true.
        jika i++ di hilangkan maka kondisi menjadi false
    */ 
}

// do...while 
do {
    // kode 
} while (kondisi);

let b = 0;
do {
    console.log(b); // Output: 0
    i++;
} while (b < 0); // Kondisi false, tetapi loop tetap jalan sekali.
/*  catatan:
    Mirip dengan while, tetapi blok kode dijalankan setidaknya sekali sebelum mengevaluasi kondisi.
*/

//  for...of
for (const elemen of iterable) {
    // kode yang akan dijalankan
}

