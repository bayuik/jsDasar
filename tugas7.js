// Buatlah sebuah variabel array dengan maksimal data 10 nilai yang berisikan tinggi badan;
// Tampilkan array tersebut dengan menggunakan perulangan biasa dan perulangan for off.
// Teman-teman analisis perbedaan hasilnya

let height = [54, 65, 44, 63, 55, 87, 51, 55, 67, 76];

// perulangan biasa
for(let i = 0; i < height.length; i++) {
    console.log(height[i]);
}

//perulangan for of

console.log('==========');

for(let i of height) {
    console.log(i);
}