// Todo

/*
 * Buat program yang menghitung jumlah huruf dalam sebuah string

    Langkah - langkah
    * 1. Deklarasikan function hitungJumlahHuruf yang menerima 1 parameter
    * 2. Deklarasikan variable dan inisialisasikan nilai nya yaitu 0 (kita mulai dengan angka nol dan kemudian menambahkannya setiap kali menemukan huruf dalam string yang diberikan , jika tidak return jumlah_huruf nya yaitu 0 )
    * 3. Buat for in loop untuk mengiterasi melalui indeks karakter dalam string
    * 4. Buat sebuah kondisi jika karakter yang diinput adalah string maka tambah 1 ke variable jumlah_huruf 
 */

/*

 Penjelasan method

    * 1. /[a-zA-Z]/ ( adalah sebuah ekspresi reguler yang mencocokkan karakter dengan rentang huruf dari A hingga Z (baik huruf besar maupun kecil) menggunakan metakarakter [a-zA-Z])
    * 2. test() (digunakan untuk memeriksa apakah karakter saat ini cocok dengan ekspresi reguler. Metode ini mengembalikan true jika ada kecocokan, dan false jika tidak ada kecocokan.)

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
let jumlah_huruf = hitungJumlahHuruf(kalimat);
console.log('Jumlah huruf adalah ', jumlah_huruf);
