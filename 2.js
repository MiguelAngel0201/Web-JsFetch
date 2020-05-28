function getDataUser() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json()) // res.text()
    .then(data => {
      // Mostrar en consola datos
      console.log(data.results[0]);
      // ========================
      // Procesando datos
      let usuario = {
        'imagen': data.results[0].picture.large,
        'nombre': data.results[0].name.title + '. ' + data.results[0].name.first + ' ' + data.results[0].name.first,
        'genero': data.results[0].gender,
        'locacion': data.results[0].location.country,
        'edad': data.results[0].registered.age,
        'telefono': data.results[0].cell
      };
      // ================
      // Generando HTML
      var contenidoHTML = /*html*/ `
      <div class="text-center bg-light text-dark border p-5 d-inline-flex flex-column align-items-center">
        <img width="100" src="${usuario.imagen}" class="pb-3 img-fluid rounded-circle">
        <p class="mb-0">Nombre: ${usuario.nombre}</p>
        <p class="mb-0">Género: ${usuario.genero}</p>
        <p class="mb-0">Lugar de nacimiento: ${usuario.locacion}</p>
        <p class="mb-0">Edad: ${usuario.edad + 10} años</p>
        <p class="mb-0">Teléfono: ${usuario.telefono}</p>
        </div>
        `;
      // ==============
      // Imprimiendo datos
      contenido.innerHTML = contenidoHTML;
      // =================
    })
}
var contenido = document.getElementById('contenido');
window.onload = getDataUser();