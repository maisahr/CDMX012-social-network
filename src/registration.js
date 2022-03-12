/* eslint-disable import/no-cycle */
import { onNavigate } from './app.js';

export const registration = () => {
  const petspaceLogoAttributes = {
    class: 'petspace-logo',
    id: 'petspaceLogo',
    src: 'img/PetSpaceLogo.png'
  };
  const formAttributes = {
    id: 'registrationForm',
    action: 'submit'
  };
  const inputNameAttributes = {
    placeholder: 'Nombre',
    id: 'regName'
  };
  const inputEmailAttributes = {
    placeholder: 'Correo electrónico',
    id: 'regEmail'
  };
  const inputPWAttributes = {
    type: 'password',
    placeholder: 'Contraseña',
    id: 'regPW'
  };
  const buttonRegisterAttributes = {
    class: 'register-button',
    type: 'button',
    id: 'regBtn'
  };
  const facebookLogoAttributes = {
    src: 'img/facebook.png',
    class: 'facebook-logo'
  };
  const googleLogoAttributes = {
    src: 'img/google.png',
    class: 'gmail-logo'
  };
  const returnButtonAttributes = {
    class: 'return-button',
    id: 'returnButton'
  };

  const setAttributes = (element, attributes) => {
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]));
  };

  const registrationStructure = document.createElement('div');
  const petspaceLogo = document.createElement('img');
  const registrationBox = document.createElement('section');
  registrationBox.setAttribute('class', 'reg-box');
  const pUser = document.createElement('p');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPW = document.createElement('input');
  const eyeButton = document.createElement('button');
  eyeButton.setAttribute('id', 'seePasswordReg');
  const eye = document.createElement('i');
  eye.setAttribute('class', 'fas fa-eye');
  const buttonRegister = document.createElement('button');
  const pOptions = document.createElement('p');
  const facebookLogo = document.createElement('img');
  const googleLogo = document.createElement('img');
  const returnButton = document.createElement('button');

  setAttributes(petspaceLogo, petspaceLogoAttributes);
  setAttributes(form, formAttributes);
  setAttributes(inputName, inputNameAttributes);
  setAttributes(inputEmail, inputEmailAttributes);
  setAttributes(inputPW, inputPWAttributes);
  setAttributes(buttonRegister, buttonRegisterAttributes);
  setAttributes(facebookLogo, facebookLogoAttributes);
  setAttributes(googleLogo, googleLogoAttributes);
  setAttributes(returnButton, returnButtonAttributes);

  pUser.textContent = 'Crea un usuario y contraseña';
  buttonRegister.textContent = 'Regístrate';
  pOptions.textContent = 'o regístrate con:';
  returnButton.textContent = 'Regresa al inicio';

  eyeButton.append(eye);
  form.append(inputName, inputEmail, inputPW, eyeButton, buttonRegister);
  registrationBox.append(pUser, form, pOptions, facebookLogo, googleLogo);
  registrationStructure.append(petspaceLogo, registrationBox, returnButton);

  returnButton.addEventListener('click', () => { onNavigate('/'); });
  eyeButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPW.type === 'password') {
      inputPW.type = 'text';
    } else {
      inputPW.type = 'password';
    }
  });

  return registrationStructure;
};
