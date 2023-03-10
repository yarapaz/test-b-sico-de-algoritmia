let tarifa = prompt('Proporcione una tarifa, por favor', 0);
let horasTrabajadas = prompt('Proporcione sus horas trabajadas, por favor', 0);

function calcularSueldo(tarifa, horasTrabajadas) {
  if (horasTrabajadas > 40) {
    const tarifaBase = tarifa * horasTrabajadas;
    const incremento = (tarifaBase * 50) / 100;
    const tarifaFinal = tarifaBase + incremento;
    console.log(`Su sueldo final es de ${tarifaFinal}`);
  } else {
    const tarifaFinal = tarifa * horasTrabajadas;
    console.log(`Su sueldo final es de ${tarifaFinal}`);
  }
}
