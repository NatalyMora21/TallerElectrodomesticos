let superElectr =  require("./electrodomesticos")

class Nevera extends superElectr.Electrodomesticos{

    constructor(consumo, procedencia,litros){
        super(consumo, procedencia);
        this.litros= litros;

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
        return this.obtenerAumento+ super.basePrecio()

    }



}


module.exports ={Nevera}