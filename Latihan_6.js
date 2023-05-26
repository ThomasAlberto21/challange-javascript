// Todo
/*
 * Buat program yang menghitung jumlah huruf dalam sebuah string

    Langkah - langkah
    * 1. Deklarasikan function hitungJumlahHuruf yang menerima 1 parameter
 */

function hitungJumlahHuruf(string) {
  let jumlah_huruf = 0;

  for (let huruf in string) {
    let karakter = string[huruf];
    if (/[a-zA-Z]/.test(karakter)) {
      jumlah_huruf++;
    }
  }
  return jumlah_huruf;
}

let kalimat = 'Thomas';
let jumlah = hitungJumlahHuruf(kalimat);
console.log(jumlah);
