import Electrodomesticos from "./electrodomesticos.js";


export default class Televisor extends Electrodomesticos{

    constructor(consumo, procedencia, stock, pulgadas, tdt){
        super(consumo, procedencia, stock);
        this.pulgadas= pulgadas;
        this.tdt= tdt
        this.valortotal= this.getTotal();

    }

    estdt() {

        let aumentoTdt;
        if(this.tdt) {
            aumentoTdt=250000
        }
        else{
            aumentoTdt=0
        }
        return aumentoTdt
    }

    aumentoPulgadas(){
        let aumentopul;
        if(this.pulgadas>40) {
            aumentopul=super.basePrecio*0.30
        }
        else{
            aumentopul=0
        }
        return aumentopul

    }

    getTotal() {

        return this.estdt()+this.aumentoPulgadas() + super.basePrecio()
        
    }


}

