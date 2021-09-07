import Electrodomesticos from '../Models/electrodomesticos.js';
import Nevera from '../Models/nevera.js';
import Televisor from '../Models/televisores.js';
import {neverasdb,televisoresdb,electrodomesticosdb} from '../Db/inventario.js' ;

export let ingresarProducto= () => {

    let tipo = document.getElementById("tipoid").value;
    let consumo = document.getElementById("consumoid").value;
    let procedencia = document.getElementById("procedenciaid").value;
    let stock = document.getElementById("stcokid").value;

    let nuevoElectrodomestico;

    if (tipo==1){
        nuevoElectrodomestico = new Electrodomesticos(consumo,procedencia,stock);
        console.log(electrodomesticosdb)
        electrodomesticosdb.push(nuevoElectrodomestico)
    }
    else if(tipo==2){
        let litros = document.getElementById("litrosid").value;
        nuevoElectrodomestico = new Nevera(consumo,procedencia,stock,litros);
        console.log(nuevoElectrodomestico)
        neverasdb.push(nuevoElectrodomestico)

    }
    else if(tipo==3){
        let pulgadas = document.getElementById("pulgadasid").value;
        let tdt = document.getElementById("tdtid").value;


        let enviotdt= tdt==10 ? true: false
        nuevoElectrodomestico = new Televisor(consumo,procedencia,stock,pulgadas,enviotdt)
        console.log(nuevoElectrodomestico)
        televisoresdb.push(nuevoElectrodomestico)

    }

    
}


export let agregarProducto= (tipo, consumo,procedencia,cantproductos)=>{



    if(tipo==1){
        
        for (let i = 0; index < electrodomesticos.length; i++) {
            if(electrodomesticos[i].consumo==consumo && electrodomesticos[i].procedencia==procedencia){

                //Validar stock
                if  (cantproductos > lectrodomesticos[i].stock){
                    console.log("Cantidad no diponible en stock")
                }
                else {
                    let actualStock= lectrodomesticos[i].stock - cantproductos;
                    //Actualizar stock
                    lectrodomesticos[i].stock=actualStock;
                    console.log("Stock actualizado")
                }
                break;
            }
        }
    }
    else if(tipo==2){
        for (let i = 0; index < neveras.length; i++) {
            if(neveras[i].consumo==consumo && neveras[i].procedencia==procedencia){

                //Validar stock
                if  (cantproductos > neveras[i].stock){
                    console.log("Cantidad no diponible en stock")
                }
                else {
                    let actualStock= neveras[i].stock - cantproductos;
                    //Actualizar stock
                    neveras[i].stock=actualStock;
                    console.log("Stock actualizado")
                }
                break;
            }
        }
    }
    else if(tipo==3){
        for (let i = 0; index < televisores.length; i++) {
            if(televisores[i].consumo==consumo && televisores[i].procedencia==procedencia){

                //Validar stock
                if  (cantproductos > televisores[i].stock){
                    console.log("Cantidad no diponible en stock")
                }
                else {
                    let actualStock= televisores[i].stock - cantproductos;
                    //Actualizar stock
                    televisores[i].stock=actualStock;
                    console.log("Stock actualizado")
                }
                break;
            } 
        }
    }
    else {
        console.log('Opción invalida, intente nuevamente')
    }

}


export let listinventario= () => {


    let infogeneralnew = recorrerInventario(electrodomesticosdb) + recorrerInventario(neverasdb)+ recorrerInventario(televisoresdb)
    

    console.log(electrodomesticosdb, neverasdb,televisoresdb )

    document.getElementById("inventarioId").innerHTML= infogeneralnew


}

let recorrerInventario= (arraydb) => {
    let infogeneral;

    arraydb.forEach(product => {
        infogeneral+= `<p> Consumo: ${product.consumo} <p>
                       <p> Procedencia:${product.procedencia} <p>
                       <p> Valor:${product.valortotal} <p>
                       <p> Stock:${product.stock} <p>
                       `
    });

    return infogeneral
}




