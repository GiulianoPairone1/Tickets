//Botones
function finalizar() {
    window.location.href = " paginaFinaal.html ";
  }
function main() {
    window.location.href = "Main.html ";
  }
function toggleSelect() {
    var checkbox = document.getElementById('checkbox');
    var select = document.getElementById('select');
    var input = document.getElementById('prueba')
    
    if (checkbox.checked) {
      select.disabled = false;
      select.style.display = 'block';
      input.style.display = 'block';
    } else {
      select.disabled = true;
      select.style.display = 'none';
      input.style.display = 'none';
    }
  }

  var camposPorCheckbox = {
    checkbox1: ["Motivo", "SSID", "Puerto","Precinto","Metraje"],
    checkbox2: ["Motivo", "Donde se realizo el cambio", "Con cuantos probo","Fue por culpa del cliente?"],
    checkbox3: ["Motivo","Seleccione equipo"],
    checkbox4: ["Marca del router", "Se habilito el puerto 8080", "Contrasenia Remota"],
    checkbox5: ["Caja", "Puerto", "Precinto"],
    checkbox6:["Retiro Transformador?","Conectores reutilizables?","Se libero puerto?"],
    checkbox7:["","","","",""]
  };
  function mostrarCampos(checkboxId) {
    var checkbox = document.getElementById("checkbox" + checkboxId);
    var camposContainer = document.getElementById("camposContainer" + checkboxId);

    // Eliminar campos existentes
    while (camposContainer.firstChild) {
      camposContainer.removeChild(camposContainer.firstChild);
    }

    if (checkbox.checked) {
      // Obtener los campos correspondientes al checkbox
      var campos = camposPorCheckbox["checkbox" + checkboxId];

      // Generar los campos
      for (var i = 0; i < campos.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = campos[i];
        camposContainer.appendChild(input);
      }
    }
  }