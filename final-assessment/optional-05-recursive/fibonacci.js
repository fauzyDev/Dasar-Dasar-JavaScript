function fibonacci(n, arr = []) {
    if (n < 0) {
        throw new Error("Bilangan harus positif");
    }
    if (n === 0) {
        arr.push(0);
        return arr;
    }
    if (n === 1) {
        arr.push(0, 1);
        return arr;
    }

    // Rekursi untuk melanjutkan deret
    fibonacci(n - 1, arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
