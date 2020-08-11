'use strict';

function updateAll(backdata) {
  // guardo en local storage
  if (backdata) {
    console.log(backdata);

    inputName.value = backdata.name;
    inputJob.value = backdata.job;
    inputEmail.value = backdata.email;
    inputLinkedin.value = backdata.linkedin;
    inputGithub.value = backdata.github;
    inputPhone.value = backdata.phone;

    updateCardItem('name', backdata.name || 'Nombre Apellido');
    updateCardItem('job', backdata.job || 'Front End Developer');
    updateCardLinkOnStart(
      'email',
      backdata.email && `mailto:${backdata.email}`
    );
    updateCardLinkOnStart(
      'linkedin',
      backdata.linkedin && `https://linkedin.com/in/${backdata.linkedin}`
    );
    updateCardLinkOnStart(
      'github',
      backdata.github && `https://github.com/${backdata.github}`
    );
    updateCardLinkOnStart(
      'phone',
      backdata.phone && `tel:+34${backdata.phone}`
    );
  } else {
    updateCardItem('name', 'Nombre Apellido');
    updateCardItem('job', 'Front End Developer');
    updateCardLink('email', 'mailto:');
    updateCardLink('linkedin', 'https://linkedin.com/in/');
    updateCardLink('github', 'https://github.com/');
    updateCardLink('phone', 'tel:+34');
    updateCardPalette();
    updateButtonStatus();
    saveInfo();
  }
}

const backdata = getInfo();
updateAll(backdata);
