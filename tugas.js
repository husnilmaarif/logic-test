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
console.log(`a = ${a}`);
console.log(`b = ${b}`);
// ========================================

// NOMOR 5
let angka = 104;

function cekAngka(angka) {
  if (angka == 1) {
    alert("satu");
  } else if (angka == 2) {
    alert("dua");
  } else if (angka == 3) {
    alert("tiga");
  } else if (angka == 4) {
    alert("empat");
  } else if (angka == 5) {
    alert("lima");
  } else if (angka == 6) {
    alert("enam");
  } else if (angka == 7) {
    alert("tujuh");
  } else if (angka == 8) {
    alert("delapan");
  } else if (angka == 9) {
    alert("sembilan");
  } else if (angka == 10) {
    alert("sepuluh");
  } else {
    alert("masukkan angka 1-10");
  }
}
console.log("==========");
cekAngka(angka);
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
// max number prototype
Number.prototype.maxNumber = function () {
  let value = this.valueOf();
  value = String(value);

  let numbers = value.split("");
  let result = [...numbers].shift();

  for (let num of numbers) {
    if (num > result) {
      result = num;
    }
  }

  return Number(result);
};

// min number prototype
Number.prototype.minNumber = function () {
  let value = this.valueOf();
  value = String(value);

  let numbers = value.split("");
  let result = [...numbers].shift();

  for (let num of numbers) {
    if (num < result) {
      result = num;
    }
  }

  return Number(result);
};

let numbers = 42688311;
let max = numbers.maxNumber();
let min = numbers.minNumber();

console.log("==========");
console.log("Numbers:", numbers);
console.log("Max:", max);
console.log("Min:", min);
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
