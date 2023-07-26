

// document es el documento 
// el operador . permite acceder a propiedades o métodos (acciones van entre parentesis)
// write es un método (función que le pertenece a alguien) en este caso al documento
// document.write

// const myModal = document.getElementById('modal-contactame');
// const myElement = document.getElementById('contactame');

// myModal.addEventListener('shown.bs.modal', () => {
//     myElement.focus();
// });

// Animación para el nombre en el portafolio 
  let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Cynthia Arroyo')
  .pauseFor(300)
  .deleteChars(10)
  .start();

  