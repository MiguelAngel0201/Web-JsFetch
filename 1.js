function getDatosTxt() {
  fetch('1.txt')
    .then(data => data.text())
    .then(data => {
      button.classList.replace('btn-primary', 'btn-success');
      contenidoTxt.innerHTML = data;
    })
    .catch(() => button.classList.replace('btn-primary', 'btn-danger'))
}
var contenidoTxt = document.getElementById('contenidoTxt');
var button = document.getElementById('button');

button.addEventListener('click', getDatosTxt);