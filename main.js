function solicitarNumero() {
  let numero = parseInt(prompt("Ingresa un número entero: "));
  let factorial = 1;

  for (let i = 1; i <= numero; i = i + 1) {
    factorial = factorial * i;
  }
  if (numero < 0) {
    alert("Sólo números enteros positivos.");
  } else {
    alert("El factorial de " + numero + " es " + factorial);
  }
}

solicitarNumero();