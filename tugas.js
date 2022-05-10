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
let cekAngka = prompt("silahkan masukkan angka dari 1-40. (masih percobaan)");

if (cekAngka == 1) {
  cekAngka = "satu";
} else if (cekAngka == 2) {
  cekAngka = "dua";
} else if (cekAngka == 3) {
  cekAngka = "tiga";
} else if (cekAngka == 4) {
  cekAngka = "empat";
} else if (cekAngka == 5) {
  cekAngka = "lima";
} else if (cekAngka == 6) {
  cekAngka = "enam";
} else if (cekAngka == 7) {
  cekAngka = "tujuh";
} else if (cekAngka == 8) {
  cekAngka = "delapan";
} else if (cekAngka == 9) {
  cekAngka = "sembilan";
} else if (cekAngka == 10) {
  cekAngka = "sepuluh";
} else if (cekAngka == 11) {
  cekAngka = "sebelas";
} else if (cekAngka == 12) {
  cekAngka = "dua belas";
} else if (cekAngka == 13) {
  cekAngka = "tiga belas";
} else if (cekAngka == 14) {
  cekAngka = "empat belas";
} else if (cekAngka == 15) {
  cekAngka = "lima belas";
} else if (cekAngka == 16) {
  cekAngka = "enam belas";
} else if (cekAngka == 17) {
  cekAngka = "tujuh belas";
} else if (cekAngka == 18) {
  cekAngka = "delapan belas";
} else if (cekAngka == 19) {
  cekAngka = "sembilan belas";
} else if (cekAngka == 20) {
  cekAngka = "dua puluh";
} else if (cekAngka == 21) {
  cekAngka = "dua puluh satu";
} else if (cekAngka == 22) {
  cekAngka = "dua puluh dua";
} else if (cekAngka == 23) {
  cekAngka = "dua puluh tiga";
} else if (cekAngka == 24) {
  cekAngka = "dua puluh empat";
} else if (cekAngka == 25) {
  cekAngka = "dua puluh lima";
} else if (cekAngka == 26) {
  cekAngka = "dua puluh enam";
} else if (cekAngka == 27) {
  cekAngka = "dua puluh tujuh";
} else if (cekAngka == 28) {
  cekAngka = "dua puluh delapan";
} else if (cekAngka == 29) {
  cekAngka = "dua puluh sembilan";
} else if (cekAngka == 30) {
  cekAngka = "tiga puluh";
} else if (cekAngka == 31) {
  cekAngka = "tiga puluh satu";
} else if (cekAngka == 32) {
  cekAngka = "tiga puluh dua";
} else if (cekAngka == 33) {
  cekAngka = "tiga puluh tiga";
} else if (cekAngka == 34) {
  cekAngka = "tiga puluh empat";
} else if (cekAngka == 35) {
  cekAngka = "tiga puluh lima";
} else if (cekAngka == 36) {
  cekAngka = "tiga puluh enam";
} else if (cekAngka == 37) {
  cekAngka = "tiga puluh tujuh";
} else if (cekAngka == 38) {
  cekAngka = "tiga puluh delapan";
} else if (cekAngka == 39) {
  cekAngka = "tiga puluh sembilan";
} else if (cekAngka == 40) {
  cekAngka = "empat puluh";
} else {
  cekAngka = "silahkan masukkan bilangan 1-100";
}

console.log("==========");
alert(cekAngka);
console.log(cekAngka);
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
