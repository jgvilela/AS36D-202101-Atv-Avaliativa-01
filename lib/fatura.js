class Fatura {

    processadorDeBoletos(tipoDocumento, arrayBoletos){
        let totalPago = 0.00;
        for (let i = 0; i < arrayBoletos.length; i++) {
            totalPago += arrayBoletos[i].valor;
        }
        if(totalPago >= this.valorTotal)
            this.status = 1
        
        let arr = [];
            
        for (let i = 0; i < arrayBoletos.length; i++) {
            arr.push({
                valorPago: arrayBoletos[i].valor,
                data: arrayBoletos[i].data,
                tipo: tipoDocumento
            });
        }

        return arr;
    }
}

module.exports = Fatura;