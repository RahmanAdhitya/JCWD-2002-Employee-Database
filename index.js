// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

const duplicateIndexOf = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
};

let ayam = [1, 2, 3, 4, 5];
let ikan = "saya makan ayam";
let result = duplicateIndexOf(ayam, 4);
let result2 = duplicateIndexOf(ikan, "m");
console.log(result);
console.log(result2);

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

const duplicateFind = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return arr[i];
    }
  }
};

let kelas = ["sandi", "dono", "Jono", "anto", "joni", "jono"];
let result3 = duplicateFind(kelas, "jono");

console.log(result3);
