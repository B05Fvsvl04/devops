const mongoose = require("mongoose");
const app = require("./server");

mongoose
  .connect("mongodb://testing:testing@localhost:27017/JestDB", { useNewUrlParser: true })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });

function calcularPromedio(numeros) {
  // No se valida la entrada de datos
  if (numeros.length === 0) {
    return 0;
  }

  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  // Se utiliza una variable no declarada
  promedio = suma / numeros.length;
  return promedio;
}

// Ejemplo de uso
var resultado = calcularPromedio([10, 5, 20]);
console.log("El promedio es:", resultado);
