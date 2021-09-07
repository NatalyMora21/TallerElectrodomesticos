export default class Electrodomesticos{

    constructor(consumo, procedencia,stock){
        this.consumo= consumo;
        this.procedencia= procedencia
        this.stock= stock
        this.valortotal= this.basePrecio();
    
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
            case "nacional":
                valorprocedencia=250000
                break
            case "importado":
                valorprocedencia=350000
                break

        }
        return valorprocedencia

    }

    basePrecio() {


        console.log(this.tipoConsumo()+ this.tipoProcedencia()+"base precios")

        return this.tipoConsumo()+ this.tipoProcedencia()
    }

}

