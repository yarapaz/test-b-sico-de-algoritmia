function mayoresDeEdad(personas) {
  const mayoresDeEdad = personas.filter(
    (cadaPersona) => cadaPersona.edad >= 18
  );
  console.log(`Personas mayores de edad: ${mayoresDeEdad}`);
}

function menoresdDeEdad(personas) {
  const menoresDeEdad = personas.filter((cadaPersona) => cadaPersona.edad < 18);
  console.log(`Personas menores de edad: ${menoresDeEdad}`);
}

function masculinasMayoresDeEdad(personas) {
  const masculinasMayoresDeEdad = personas.filter(
    (cadaPersona) => cadaPersona.sexo === 'masculino' && cadaPersona.edad >= 18
  );
  console.log(
    `Personas de sexo masculino mayores de edad: ${masculinasMayoresDeEdad}`
  );
}

function femeninasMenoresDeEdad(personas) {
  const femeninasMenoresDeEdad = personas.filter(
    (cadaPersona) => cadaPersona.sexo === 'femenino' && cadaPersona.edad < 18
  );
  console.log(
    `Personas de sexo femenino menores de edad: ${femeninasMenoresDeEdad}`
  );
}

function porcentajeMayoresDeEdad(personas) {
  let porcentajeMayoresDeEdad;

  const mayoresDeEdad = personas.filter(
    (cadaPersona) => cadaPersona.edad >= 18
  );
  porcentajeMayoresDeEdad = (mayoresDeEdad.length / 50) * 100;
  console.log(
    `Porcentaje de personas mayores de edad: ${porcentajeMayoresDeEdad}`
  );
}

function porcentajeMujeres(personas) {
  let porcentajeMujeres;

  const mujeres = personas.filter(
    (cadaPersona) => cadaPersona.sexo === 'femenino'
  );
  porcentajeMujeres = (mujeres.length / 50) * 100;
  console.log(`Porcentaje de personas mayores de edad: ${porcentajeMujeres}`);
}
