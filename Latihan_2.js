// Todo
/*
 * Buat program yang mengecek apakah sebuah bilangan genap atau ganjil
 */

function checkNumber(number) {
  if (number % 2 == 0) {
    console.log(number, 'Adalah bilangan genap');
  } else {
    console.log(number, 'Adalah bilangan ganjil');
  }
}

checkNumber(5);
