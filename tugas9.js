// Buatlah sebuah variabel object versi teman teman.
// Tampilkan berikan nilai pada masing masing properti objek yang teman teman buat
// Setelah itu tampilkan objectnya dengan perulangan for in.

let aang = {
    name : 'aang',
    age : 100,
    power: 'airbender',
    friends: ['sokka', 'katara', 'toph', 'zuko']
}

console.log(aang);

console.log('=========')

for(let i in aang){
    console.log(aang[i]);
}