const $ = sel => document.querySelector(sel);

const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');

const comment = document.getElementById('comment');
const commentMsg = document.getElementById('comment-msg');

const username = document.getElementById('username');
const usernameMsg = document.getElementById('username-msg');

const ta7 = document.getElementById('ta7');
const ta7msg = document.getElementById('ta7-msg');

// act 1
function validateEmail(e) {
  e.preventDefault(); 
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('email-msg');
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
  if (!re.test(email)) {
    msg.textContent = 'Formato de correo no válido.';
    msg.className = 'msg error';
    return false;
  } else {
    msg.textContent = 'Correo válido.';
    msg.className = 'msg ok';
    return true;
  }
}
document.getElementById('form-email').addEventListener('submit', validateEmail);

// act 2
function validateRequired(e) {
  e.preventDefault();
  const form = e.target;
  const nombre = form.nombre.value.trim(); 
  const apellidos = form.apellidos.value.trim();
  const telefono = form.telefono.value.trim();
  
  if (!nombre || !apellidos || !telefono) {
    alert('Rellena todos los campos obligatorios.');
    return false;
  }
  
  const phoneRe = /^\+?\d+$/; 
  
  if (!phoneRe.test(telefono)) {
    alert('El campo de teléfono solo puede contener números y un signo "+" al inicio para la extensión del país.');
    return false;
  }
  
  alert('Formulario correcto');
  return true;
}

document.getElementById('form-required').addEventListener('submit', validateRequired);

// act 3 - mostrar /ocultar contraseña
document.getElementById('show-pass').addEventListener('change', function() {
  const t = this.checked ? 'text' : 'password'; 
  pass.type = t; 
  pass2.type = t;
});

//act 3 - comprobar q son iguales
function validatePasswordForm(e) {
  e.preventDefault();
  const msg = document.getElementById('pass-msg');
  
  if (pass.value === '') { 
    msg.textContent = 'La contraseña no puede estar vacía.'; 
    msg.className = 'msg error'; 
    return false; 
  }
  if (pass.value !== pass2.value) { 
    msg.textContent = 'Las contraseñas no coinciden.'; 
    msg.className = 'msg error'; 
    return false; 
  }
  
  msg.textContent = 'Registro correcto.'; 
  msg.className = 'msg ok';
  return true;
}
document.getElementById('form-pass').addEventListener('submit', validatePasswordForm);

// act 4
function checkCommentLength() {
  const len = comment.value.length;
  if (len < 50) { 
    commentMsg.textContent = `Faltan ${50 - len} carácteres para el mínimo de 50.`; 
    commentMsg.className = 'msg warning'; 
  } else { 
    commentMsg.textContent = `Longitud OK (${len} caracteres).`; 
    commentMsg.className = 'msg ok'; 
  }
}
comment.addEventListener('input', checkCommentLength);

function validateCommentForm(e) {
  e.preventDefault();
  if (comment.value.length < 50) { 
    alert(`El comentario debe tener al menos 50 caracteres. Faltan ${50 - comment.value.length}.`); 
    return false;
  } else { 
    alert('Comentario enviado.'); 
    return true;
  }
}
document.getElementById('form-comment').addEventListener('submit', validateCommentForm);

// act 5
function validateUsername(e) {
  e.preventDefault();
  const re = /^[A-Za-z0-9]+$/;
  if (!re.test(username.value)) {
    usernameMsg.textContent = 'Nombre de usuario no válido: solo letras y números, sin espacios.';
    usernameMsg.className = 'msg error';
    return false;
  } else {
    usernameMsg.textContent = 'Nombre de usuario válido.';
    usernameMsg.className = 'msg ok';
    return true;
  }
}
document.getElementById('form-username').addEventListener('submit', validateUsername);

// act 6
function handleChangeEvent() {
  document.getElementById('change-msg').textContent = `Nuevo valor: "${this.value}"`;
  document.getElementById('change-msg').className = 'msg';
}
document.getElementById('change-input').addEventListener('change', handleChangeEvent);

// act 7
function countTextareaCharacters() {
  const n = this.value.length;
  ta7msg.textContent = `${n} caracteres`;
  if (n > 200) { 
    ta7msg.textContent += ' — Límite superado (200)'; 
    ta7msg.className = 'msg warning'; 
  } else {
    ta7msg.className = 'msg';
  }
}
ta7.addEventListener('input', countTextareaCharacters);

// act 8
function preventEmptySubmission(e) {
  const field = document.getElementById('must');
  const msg = document.getElementById('prevent-msg');
  msg.textContent = '';
  
  if (field.value.trim() === '') {
    e.preventDefault(); 
    msg.textContent = 'El campo no puede estar vacío.'; 
    msg.className = 'msg error';
    return false;
  } else {
    msg.textContent = 'Enviado (simulación).'; 
    msg.className = 'msg ok';
    e.preventDefault(); 
    return true; 
  }
}
document.getElementById('form-prevent').addEventListener('submit', preventEmptySubmission);

// act 9
function confirmReset(e) {
  const confirmed = confirm('¿Seguro que quieres restablecer el formulario?'); 
  
  if (!confirmed) {
    e.preventDefault(); 
    document.getElementById('reset-msg').textContent = 'Restablecimiento cancelado.'; 
    document.getElementById('reset-msg').className = 'msg error';
    return false;
  } else {
    document.getElementById('reset-msg').textContent = 'Formulario restablecido.'; 
    document.getElementById('reset-msg').className = 'msg ok';
    setTimeout(() => { document.getElementById('reset-msg').textContent = ''; }, 1500); 
    return true;
  }
}
document.getElementById('form-reset').addEventListener('reset', confirmReset);

document.getElementById('form-reset').addEventListener('submit', function(e){ e.preventDefault(); alert('Enviado'); });

// act 10
const focusables = document.querySelectorAll('.focusable');

function handleFocusChange() {
  this.dataset.old = this.style.backgroundColor || ''; 
  this.style.backgroundColor = '#e39c18ff';
}

function handleBlurChange() {
  this.style.backgroundColor = this.dataset.old || ''; 
}

focusables.forEach(function(el) {
  el.addEventListener('focus', handleFocusChange);
  el.addEventListener('blur', handleBlurChange);
});