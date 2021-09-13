let array = [2, 9, 55, 23, 96, 13, 1, 12];

function maxNumber (array) {
  
  // Este ciclo entrega el valor mas alto dentro del array
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  // Este ciclo cuenta la cantidad de digitos en el numero obtenido previamente
  let digits = 0, num = max;

  while (num) {
    num = Math.trunc(num / 10);
    digits++
  }

  // esta rutina determina si el numero es par o impar
  let even = "par";
  if (max % 2) {
    even = "impar";
  }

  console.log(`El valor mas alto es ${max}, el cual es ${even}, y tiene ${digits} digitos.`);
}

maxNumber(array);