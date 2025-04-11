const usuarioValido = "admin";
const contrasenaValida = "1234";

function verificarCredenciales() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje");

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    // Redirigir al archivo de tu compañero
    window.location.href = "archivo-adixon.html";
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
  }
}
