class Electrodomesticos{

    constructor(consumo, procedencia){
        this.consumo= consumo;
        this.procedencia= procedencia
        

    }

    tipoConsumo() {
        let valorconsumo;
        
        switch(this.consumo){
            case "A":
                valorconsumo=450000
                break
            case "B":
                valorconsumo=350000
                break
            case "C":
                valorconsumo=250000
                break

        }
   
        return(valorconsumo)
    }

    tipoProcedencia(){
        let valorprocedencia;

        switch(this.procedencia){
            case "Nacional":
                valorprocedencia=250000
                break
            case "Importado":
                valorprocedencia=350000
                break

        }
        return valorprocedencia

    }

    basePrecio() {

        return this.tipoConsumo()+ this.tipoProcedencia()
    }

}

module.exports ={Electrodomesticos}