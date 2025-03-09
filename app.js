function reemplazarImagen(event) {
    var archivo = event.target.files[0]; // Obtener el archivo
    var imagen = document.getElementById("imagen");
  
    if (archivo) {
      var lector = new FileReader();
      lector.onload = function(e) {
        imagen.src = e.target.result; // Cambiar el src de la imagen existente
      };
      lector.readAsDataURL(archivo); // Leer la imagen como URL base64
    }
  }
  
  const generateTicket = document.querySelector('button')

  generateTicket.addEventListener("click", )