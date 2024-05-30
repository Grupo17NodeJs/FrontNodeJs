function valida_envia(){
      valor = document.getElementById("nombre").value;
      if( valor == null || valor.length == 0 || valor.length <5 ) {
          alert("Tiene que escribir su nombre correcto");
          return false;
      }
      valor = document.getElementById("apellido").value;
      if( valor == null || valor.length == 0 || valor.length <5 ) {
          alert("Tiene que escribir su apellido correcto");
          return false;
      }
  }