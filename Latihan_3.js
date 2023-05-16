// Todo Buat program yang mengecek apakah sebuah bilangan prima atau bukan ( Bilangan prima adalah bilangan yang hanya dapat dibagi dengan angka 1 dan dirinya sendiri tanpa sisa.)

/*
    Berikut adalah langkah-langkah umum untuk menentukan apakah sebuah bilangan adalah bilangan prima:

    * Pilih bilangan yang ingin Anda periksa apakah merupakan bilangan prima atau bukan.
    * Periksa apakah bilangan tersebut kurang dari 2. Jika iya, maka bilangan tersebut bukan bilangan prima.
    * Bagi bilangan tersebut dengan angka-angka dari 2 hingga akar kuadrat dari bilangan tersebut.
    * Jika ditemukan angka pembagi yang membagi bilangan tersebut tanpa sisa, maka bilangan tersebut bukan bilangan prima.
    * Jika tidak ada angka pembagi yang ditemukan, maka bilangan tersebut adalah bilangan prima.
*/

// Buat sebuah function untuk mengecek jika number < 2 maka bilangan tersebut bukan bilangan prima
function bilanganPrima(number) {
  if (number < 2) {
    return false;
  }

  /*
    Pada bagian ini, kita menggunakan sebuah perulangan for untuk memeriksa apakah number dapat dibagi dengan angka lain selain 1 dan dirinya sendiri. Perulangan dimulai dari i = 2 (karena bilangan prima tidak mungkin habis dibagi oleh 1) hingga i lebih kecil atau sama dengan akar kuadrat dari number.

    Di setiap iterasi perulangan, kita memeriksa apakah number habis dibagi dengan i (artinya number % i menghasilkan 0). Jika ya, itu berarti number bukanlah bilangan prima karena bisa dibagi dengan i yang merupakan angka lain di antara 2 dan akar kuadrat dari number. Dalam hal ini, fungsi akan mengembalikan false.
  */
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const bilangan = 4;
if (bilanganPrima(bilangan)) {
  console.log(bilangan, 'Adalah bilangan prima');
} else {
  console.log(bilangan, 'Bukan bilangan prima');
}
