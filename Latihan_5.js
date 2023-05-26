// Todo

/*
 * 5.Buat program yang menampilkan angka terbesar di antara tiga bilangan yang diberikan

    Langkah - langkah
    * 1. Deklarasikan function angkaTerbesar yang menerima 3 parameter (bilangan_1 , bilangan_2 dan bilangan_3)\
    * 2. Buat sebuah kondisi yang dimana jika bilangan_1 lebih besar dari bilangan_2 dan bilangan_3 maka return bilangan_1
    * 3. Buat sebuah kondisi kedua yg dimana jika bilangan_2 lebih besar dari bilangan_1 dan bilangan_3 maka return bilangan_2
    * 4. Buat kondisi terakhir untuk return bilangan_3 jika yang lain tidak terpenuhi
    * 5. Deklarasikan variable dan inisialisasikan nilai ke dalam variable tersebut
    * 6. Panggil function yang sudah di deklarasikan tadi dan masukkan ketika variable tadi
    * 7. Cetak hasilnya ke dalam console.
 */

function angkaTerbesar(bilangan_1, bilangan_2, bilangan_3) {
  if (bilangan_1 >= bilangan_2 && bilangan_1 >= bilangan_3) {
    return bilangan_1;
  } else if (bilangan_2 >= bilangan_1 && bilangan_2 >= bilangan_3) {
    return bilangan_2;
  } else {
    return bilangan_3;
  }
}

bilangan_1 = 10;
bilangan_2 = 50;
bilangan_3 = 4;

hasil = angkaTerbesar(bilangan_1, bilangan_2, bilangan_3);
console.log('Angka terbesar dari 3 bilangan tersebut adalamh', hasil);
