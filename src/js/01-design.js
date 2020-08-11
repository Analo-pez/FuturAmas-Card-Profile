'use strict';

let data = {
  palette: '1',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};

//selectors
// seleccionamos los campos del formulario

const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const inputPhone = document.querySelector('.js-input-phone');
const inputPalette1 = document.querySelector('.js_palette1');
const inputPalette2 = document.querySelector('.js_palette2');
const inputPalette3 = document.querySelector('.js_palette3');
const inputPalette4 = document.querySelector('.js_palette4');
const inputPalette5 = document.querySelector('.js_palette5');

// rellenamos el objeto con el valor de los input del formulario

function readForm() {
  data.name = document.querySelector('.js-input-name').value;
  data.job = document.querySelector('.js-input-job').value;
  data.email = document.querySelector('.js-input-email').value;
  data.linkedin = document.querySelector('.js-input-linkedin').value;
  data.github = document.querySelector('.js-input-github').value;
  data.phone = document.querySelector('.js-input-phone').value;
  data.palette = document.querySelector(
    'input[name=paletteoptions]:checked'
  ).id;
  // pausa
  updateAll();
}

inputName.addEventListener('keyup', readForm);
inputJob.addEventListener('keyup', readForm);
inputEmail.addEventListener('keyup', readForm);
inputLinkedin.addEventListener('keyup', readForm);
inputGithub.addEventListener('keyup', readForm);
inputPhone.addEventListener('keyup', readForm);

inputPalette1.addEventListener('change', readForm);
inputPalette2.addEventListener('change', readForm);
inputPalette3.addEventListener('change', readForm);
inputPalette4.addEventListener('change', readForm);
inputPalette5.addEventListener('change', readForm);

function updateCardItem(propertyName, placeholder) {
  const inputValue = data[propertyName];
  let cardValue;
  if (inputValue) {
    cardValue = inputValue;
  } else {
    cardValue = placeholder;
  }
  document.querySelector('.js-' + propertyName).innerHTML = cardValue;
}

function updateCardLink(propertyName, prefix) {
  // debugger;
  const inputValue = data[propertyName];
  let cardValue;
  if (inputValue) {
    cardValue = prefix + inputValue;
  } else {
    cardValue = '';
  }
  document.querySelector('.js-' + propertyName).href = cardValue;
  hideIcon(propertyName, inputValue);
}

function updateCardLinkOnStart(propertyName, cardValue) {
  if (cardValue) {
    document.querySelector('.js-' + propertyName).href = cardValue;
    hideIcon(propertyName, cardValue);
  }
}

//Cuando la llamamos borra las clases de los elementos que se añaden al seleccionar o que ya tenían (ahora en card preview)
function removeClassesFromElement(element, property) {
  element.classList.remove(`js_palette1${property}`);
  element.classList.remove(`js_palette2${property}`);
  element.classList.remove(`js_palette3${property}`);
  element.classList.remove(`js_palette4${property}`);
  element.classList.remove(`js_palette5${property}`);
}

//Lo mismo que removeClassesFromElement para más de un elemento (array de iconos)
function removeClassesFromElements(elements, property) {
  for (let i = 0; i < elements.length; i++) {
    removeClassesFromElement(elements[i], property);
  }
}

//Añade una clase a una lista de elementos (array)
function addClassToElements(elements, classToAdd) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(classToAdd);
  }
}

//Cambia el color
function updateCardPalette() {


  // Cogemos los elementos por clase
  const cardPreviewName = document.querySelector('.js-name');
  const cardPreviewBorderBox = document.querySelector('.js-border-box');
  const cardPreviewIcons = document.querySelectorAll('.js-icon');
  const cardPreviewIconsContainer = document.querySelectorAll(
    '.js-icon-container'
  );

  //Borramos las clases que ya no queremos con las funciones previamente declaradas
  removeClassesFromElement(cardPreviewName, '_color');
  removeClassesFromElement(cardPreviewBorderBox, '_border_box');
  removeClassesFromElements(cardPreviewIcons, '_color');
  removeClassesFromElements(cardPreviewIconsContainer, '_border_color');

  //Añadimos las clases basándonos en la clase del checkbox que se seleccionó
  const radioClassName = 'js_palette' + data.palette;
  cardPreviewName.classList.add(`${radioClassName}_color`);
  cardPreviewBorderBox.classList.add(`${radioClassName}_border_box`);
  addClassToElements(cardPreviewIcons, `${radioClassName}_color`);
  addClassToElements(
    cardPreviewIconsContainer,
    `${radioClassName}_border_color`
  );
}

//Palette reset

// MEDIA

function hideIcon(name, inputValue) {
  const iconContainer = document.querySelector(`.jscontainer-${name}`);
  if (inputValue !== '') {
    iconContainer.classList.remove('hidden-icon');
  } else {
    iconContainer.classList.add('hidden-icon');
  }
}

// Boton clear

const cardPreviewName = document.querySelector('.js-name');
const cardPreviewBorderBox = document.querySelector('.js-border-box');
const cardPreviewIcons = document.querySelectorAll('.js-icon');
const cardPreviewIconsContainer = document.querySelectorAll(
  '.js-icon-container'
);

const clearButton = document.querySelector('.js-clear-button');

function handleClearButtonClick() {
  document.querySelector('.js-form').reset();
  //Creo una variable que es un objeto. Dentro de ese objeto defino target y classname, que es lo mismo que le pasábamos antes a la función updateCardPalette -más abajo-.
  //Vuelvo a usar dentro de la función de reset esta función que es la que usábamos antes para eliminar y añadir clases, solo que ahora en vez de dejar que identifique el evento automáticamente se lo pasamos "a la fuerza".
  data.palette = '1';
  data.name = '';
  data.job = '';
  data.phone = '';
  data.email = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';
  updateAll();
}

clearButton.addEventListener('click', handleClearButtonClick);
