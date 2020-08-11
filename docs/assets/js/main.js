"use strict";console.log("partial 1");const inputName=document.querySelector(".input__name"),inputPosition=document.querySelector(".input__position");function addInfo(){addInfo2("name","Nombre Apellido"),addInfo2("position","Front End Developer")}function addInfo2(e,t){const o=document.querySelector(".js-input-"+e).value;document.querySelector(".js-"+e).innerHTML=o,console.log(o),o||(document.querySelector(".js-"+e).innerHTML=t)}inputName.addEventListener("keyup",addInfo),inputPosition.addEventListener("keyup",addInfo);const inputPalette1=document.querySelector(".js_palette1"),inputPalette2=document.querySelector(".js_palette2"),inputPalette3=document.querySelector(".js_palette3");function removeClassesFromElement(e,t){e.classList.remove("js_palette1"+t),e.classList.remove("js_palette2"+t),e.classList.remove("js_palette3"+t)}function removeClassesFromElements(e,t){for(let o=0;o<e.length;o++)removeClassesFromElement(e[o],t)}function addClassToElements(e,t){for(let o=0;o<e.length;o++)e[o].classList.add(t)}function changeToPalette(e){const t=document.querySelector(".js-name"),o=document.querySelector(".js-border-box"),n=document.querySelectorAll(".js-icon"),r=document.querySelectorAll(".js-icon-container");removeClassesFromElement(t,"_color"),removeClassesFromElement(o,"_border_box"),removeClassesFromElements(n,"_color"),removeClassesFromElements(r,"_border_color"),t.classList.add(e.target.className+"_color"),o.classList.add(e.target.className+"_border_box"),addClassToElements(n,e.target.className+"_color"),addClassToElements(r,e.target.className+"_border_color")}inputPalette1.addEventListener("change",changeToPalette),inputPalette2.addEventListener("change",changeToPalette),inputPalette3.addEventListener("change",changeToPalette);const inputEmail=document.querySelector(".form__email"),inputLinkedin=document.querySelector(".form__linkedin"),inputGithub=document.querySelector(".form__github"),inputPhone=document.querySelector(".form__phone");function addHref(e){const t=e.target.value;"email"===e.target.name?document.querySelector(".js-"+e.target.name).href="mailto:"+t:"phone"===e.target.name?(document.querySelector(".js-"+e.target.name).href="tel:+34"+t,console.log("tel:+34"+t)):document.querySelector(".js-"+e.target.name).href=""+t}inputEmail.addEventListener("keyup",addHref),inputLinkedin.addEventListener("keyup",addHref),inputGithub.addEventListener("keyup",addHref),inputPhone.addEventListener("keyup",addHref);const cardPreviewName=document.querySelector(".js-name"),cardPreviewBorderBox=document.querySelector(".js-border-box"),cardPreviewIcons=document.querySelectorAll(".js-icon"),cardPreviewIconsContainer=document.querySelectorAll(".js-icon-container"),clearButton=document.querySelector(".js-clear-button");function handleClearButtonClick(){document.querySelector(".js-form").reset(),addInfo()}clearButton.addEventListener("click",handleClearButtonClick),console.log("partial 2");const collContent=document.querySelector(".js-contentFill"),collButton=document.querySelector(".js-coll");function collForm(e){collContent.classList.toggle("content")}collButton.addEventListener("click",collForm),console.log("partial 3");