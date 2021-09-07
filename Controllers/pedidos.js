
let {agregarProducto} =  require("./productos")
const {facturas}= require('../Db/inventario');
const objFactura = require('./Models/Factura');
let generarPedido= () => {

    let terminar= 1;

    let pedido= []
    while (terminar!=0){
        //Solicitar al cliente productos que desea agregar a la compra

        //Pedir tipo, consumo y procedencia
        let tipo;
        let consumo;
        let procedencia;

        //Producto
        let productoPedido= agregarProducto(tipo,consumo,procedencia);
        pedido.push(productoPedido)

    }

    let nuevaFactura= new objFactura.Factura('#001',new Date, pedido)

    facturas.push(nuevaFactura)

}

