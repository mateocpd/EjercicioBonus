function convertirAMayusculasHastaPunto(cadena) {
    let nuevaCadena = "";
    let puntoEncontrado = false;
  
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena.charAt(i);
      
      if (!puntoEncontrado) {
        nuevaCadena += caracter.toUpperCase();
      } else {
        nuevaCadena += caracter.toLowerCase();
      }
  
      if (caracter === '.') {
        puntoEncontrado = true;
      }
    }
  
    return nuevaCadena;
  }
  /*Ejemplo 1 */
  
  const entrada1 = "www.techacademy.com";
  const salida1 = convertirAMayusculasHastaPunto(entrada1);
  
  console.log("Entrada:", entrada1);
  console.log("Salida:", salida1);

  /*Ejemplo 2 */

  const entrada2 = "Buenas tardes. Como estas?";
  const salida2 = convertirAMayusculasHastaPunto(entrada2);
  
  console.log("Entrada:", entrada2);
  console.log("Salida:", salida2);
  
  /*Ejemplo 3 */

  const entrada3 = "Buenas tardes, Como estas?";
  const salida3 = convertirAMayusculasHastaPunto(entrada3);
  
  console.log("Entrada:", entrada3);
  console.log("Salida:", salida3);