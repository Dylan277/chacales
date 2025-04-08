function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const errorMsg = document.getElementById("errorMsg");
  
    const usuarioValido = "admin";
    const contrasenaValida = "1234";
  
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      errorMsg.style.color = "green";
      errorMsg.innerText = "¡Inicio de sesión exitoso!";
      
      // Redirige a otra página (por ejemplo, dashboard.html)
      window.location.href = "dashboard.html";
    } else {
      errorMsg.style.color = "red";
      errorMsg.innerText = "Usuario o contraseña incorrectos.";
    }
  }
  
  // Función para mostrar u ocultar la contraseña
  document.getElementById("verContrasena").addEventListener("change", function() {
    const contrasenaInput = document.getElementById("contrasena");
    
    // Cambia el tipo de input dependiendo de si el checkbox está marcado o no
    if (this.checked) {
      contrasenaInput.type = "text";  // Muestra la contraseña
    } else {
      contrasenaInput.type = "password";  // Oculta la contraseña
    }
  });
  