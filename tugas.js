// NOMOR 1
let intEmpat = 4;
for (let i = 3; i > 0; i--) {
  intEmpat *= i;
}
console.log(intEmpat);

let intDelapan = 8;
for (let i = 7; i > 0; i--) {
  intDelapan *= i;
}
console.log(intDelapan);
// ========================================

// NOMOR 2
function reverse(abjad) {
  let string = "";
  for (let i = abjad.length - 1; i >= 0; i--) {
    string += abjad[i];
  }
  return string;
}
console.log("==========");
console.log(reverse("abcde"));
// ========================================

// NOMOR 3
// ========================================

// NOMOR 4
let a = 3;
let b = 7;
[a, b] = [b, a];

console.log("==========");
console.log("a = " + a);
console.log("b = " + b);
// ========================================

// NOMOR 5
let angka = 104;

switch (angka) {
  case 4:
    angka = "Empat";
    break;
  case 20:
    angka = "Dua Puluh";
    break;
  case 39:
    angka = "Tiga Puluh Sembilan";
    break;
  default:
    angka = "Silahkan masukkan bilangan 1-100";
}
console.log("==========");
console.log(angka);
// ========================================

// NOMOR 6
const data = [1, 4, 7, 9, 12];
const saring = data.filter(menyaring);

function menyaring(value) {
  return value > 2 && value < 15;
}
console.log("==========");
console.log(saring.toString());
// ========================================

// NOMOR 7
const panjangData = saring.length;
console.log("==========");
console.log(panjangData);
// ========================================

// NOMOR 8
// ========================================

// NOMOR 9
const arr = [4, 2, 6, 88, 3, 11];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log("==========");
console.log(min);
console.log(max);
// ========================================

// NOMOR 10
function kabisat(tahun) {
  if (tahun % 4 == 0) {
    return `${tahun} adalah tahun kabisat`;
  } else {
    return `${tahun} bukan tahun kabisat`;
  }
}
console.log("==========");
console.log(kabisat(2021));
console.log(kabisat(2024));
