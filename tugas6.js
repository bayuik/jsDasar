// Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
// Setelah itu teman teman buatlah sebuah kondisi pada perulangan jika dia bilangan genap dia akan menampilkan text bilangan genap bukan angkanya, tetapi kalau yang tampil bilangan ganjil , biarkan angka nya yang ditampilkan.
// Tampilkan hasilnya dengan console.log()

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`${i} adalah bilangan genap`);
    } else {
        console.log(i);
    }
}