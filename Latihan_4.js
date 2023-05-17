// Todo
/*
 * Buat program yang menampilkan bilangan ganjil di antara dua bilangan yang diberikan
 */

/*
    Langkah-langkah

    * Buat sebuah function tampilBilanganGanjil dan menerima 2 parameter (bilangan_awal , bilangan_akhir).
    * Buat perulangan for untuk memeriksa setiap bilangan dalam rentang tersebut. 
    * Buat kondisi Jika bilangan tersebut tidak habis dibagi dua (bilangan % 2 !== 0) maka tampilkan bilangan 
    * Panggil function tampilBilanganGanjil dan masukkan bilangan awal dan akhir di parameternya

*/

function tampilBilanganGanjil(bilangan_awal, bilangan_akhir) {
  for (let bilangan = bilangan_awal; bilangan <= bilangan_akhir; bilangan++) {
    if (bilangan % 2 !== 0) {
      console.log(bilangan);
    }
  }
}

tampilBilanganGanjil(1, 20);
