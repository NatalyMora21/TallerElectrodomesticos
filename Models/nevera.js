import Electrodomesticos from './electrodomesticos.js'

export default class Nevera extends Electrodomesticos{

    constructor(consumo, procedencia,stock, litros){
        super(consumo, procedencia,stock);
        this.litros= litros;
        this.valortotal= this.getTotal();
    

    }

    obtenerAumento() {
        let cantidadLitros = 0;
        let aumento;
        
        if (this.litros > 120) {
            console.log(this.litros)
            cantidadLitros = (this.litros - 120) / 10;
            let porcentaje = cantidadLitros * 0.05;
            aumento = super.basePrecio() * porcentaje;
        } else {
            aumento = 0;
        }
        return aumento;
    }

    getTotal() {
        return this.obtenerAumento()+ super.basePrecio()

    }

}