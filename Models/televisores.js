
let superElectr =  require("./electrodomesticos")
class Televisor extends superElectr.Electrodomesticos{

    constructor(consumo, procedencia,pulgadas, tdt){
        super(consumo, procedencia);
        this.pulgadas= pulgadas;
        this.tdt= tdt

    }

    estdt() {

        let aumentoTdt;
        if(this.tdt) {
            aumentoTdt=250000
        }
        else{
            aumentoTdt=0

        }
    }

    aumentoPulgadas(){
        if(this.pulgadas>40) {
            
            aumentoTdt=super.basePrecio*0.30
        }
        else{
            aumentoTdt=0

        }

        return aumentoTdt

    }

    getTotal() {

        return this.estdt()+this.aumentoPulgadas() + super.basePrecio()
        
    }


}

module.exports ={Televisor}