import Electrodomesticos from './Models/electrodomesticos.js'
import Nevera from './Models/nevera.js'
import Televisor from './Models/televisores.js'

import {ingresarProducto,listinventario} from './Controllers/productos.js'

document.getElementById("btnEnviar").addEventListener("click", function() {

    ingresarProducto()

  });


  document.getElementById("btnConsultar").addEventListener("click", function() {

    listinventario()

  });