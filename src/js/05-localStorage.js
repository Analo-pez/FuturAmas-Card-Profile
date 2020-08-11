'use strict';

function saveInfo() {
  localStorage.setItem('data', JSON.stringify(data));
}

function getInfo() {
  return JSON.parse(localStorage.getItem('data'));
}
