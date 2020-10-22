// Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
// Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
// Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

let aang = 54;
let katara = 59;
let sokka = 67;

if(aang > katara && aang > sokka){
    console.log(`tinggi badan tertinggi adalah aang, dengan tinggi ${aang}`);
    if(katara > sokka) {
        console.log(`${aang}, ${katara}, ${sokka}`);
    } else {
        console.log(`${aang}, ${sokka}, ${katara}`);
    }
} else if(katara > aang && katara > sokka) {
    console.log(`tinggi badan tertinggi adalah katara, dengan tinggi ${katara}`);
    if(aang > sokka) {
        console.log(`${katara}, ${aang}, ${sokka}`);
    } else {
        console.log(`${katara}, ${sokka}, ${aang}`);
    }
} else{
    console.log(`tinggi badan tertinggi adalah sokka, dengan tinggi ${sokka}`);
    if(katara > aang) {
        console.log(`${sokka}, ${katara}, ${aang}`);
    } else {
        console.log(`${sokka}, ${aang}, ${katara}`);
    }
};
