function leerPersonas() {
  fetch('./data/personas.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      personas = data.map((eachData) => {
        const persona = {
          sexo: eachData.sexo,
          edad: eachData.edad,
        };
        return persona;
      });
    })
    .catch((error) =>
      console.log(
        `Ha ocurrido un ${error} accediendo a los datos de las personas`
      )
    );
}
