function getDataTabla() {
  fetch('3.json')
    .then(res => res.json())
    .then(data => {
      // conosole.log(data);
      setDataTabla(data);
    });
}

function setDataTabla(datos) {
  contenido.innerHTML = ''
  for (let valor of datos) {
    // console.log(valor.nombre)
    contenido.innerHTML += /*html*/ `
    <tr>
      <th scope="row">${ valor.id }</th>
      <td>${ valor.nombre }</td>
      <td>${ valor.email }</td>
      <td>${ valor.estado ? "Activo" : "Eliminado" }</td>
    </tr>
    `
  }
}
window.onload = getDataTabla();