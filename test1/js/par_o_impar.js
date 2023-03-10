let numero = prompt('Proporcione un número, por favor', 0);

function parOImpar(numero) {
  if (numero % 2 === 0) {
    for (i = numero; i >= 0; i - 2) {
      console.log(i + ',');
    }
  } else {
    for (i = numero; i > 0; i - 2) {
      console.log(i + ',');
    }
  }
}
