const objTelevisor = require('../Models/televisores');
const objNevera= require('../Models/nevera')
const objElectr= require('../Models/electrodomesticos');
const {neveras,televisores,electrodomesticos}= require('../Db/inventario');

ingresarInfo= () => {

    console.log("Para terminar, marque 0")
    terminar =1;

    while(terminar!=0){
        console.log("Seleccione el tipo de producto: marque 1 para Electrodomesticos  generales, 2 para Neveras y 3 para Tv")

        let tipo;

        //Info para los tres tipos, consumo y procedencia
        console.log("Ingrese el Tipo de consumo");
        let consumo = process.openStdin();
        console.log("Ingrese la procedencia");
        let procedencia = prompt('Ingrese la procedencia')

        //Guardarlos en el array especificado
        if(tipo==1){
  
            let electrodomestico = new objNevera.Electrodomesticos(consumo, procedencia)
            electrodomesticos.push(electrodomestico)

        }
        else if(tipo==2){
            let litros
            let nevera = new objNevera.Electrodomesticos(consumo, procedencia,litros)
            neveras.push(nevera)
            

        }
        else if(tipo==3){
            let pulgadas
            let tdt
            let tv = new objNevera.Electrodomesticos(consumo, procedencia,pulgadas,tdt)
            televisores.push(tv)

        }
        else {
            console.log('Opción invalida, intente nuevamente')
        }

        console.log("Si desea terminar marque 0");
        terminar = process.openStdin();


    }



}


inventarios = () => {



}

ingresarInfo();