class Fatura {

    processadorDeBoletos(tipoDocumento, arrayBoletos){
        let totalPago = 0.00;
        for (let i = 0; i < arrayBoletos.length; i++) {
            totalPago += arrayBoletos[i].valor;
        }
        if(totalPago >= this.valorTotal)
            this.status = 1
        
        return [
            {   
                valorPago: arrayBoletos[0].valor,
                data: arrayBoletos[0].data,
                tipo: tipoDocumento
            },
            {   
                valorPago: arrayBoletos[1].valor,
                data: arrayBoletos[1].data,
                tipo: tipoDocumento
            },
            {   
                valorPago: arrayBoletos[2].valor,
                data: arrayBoletos[2].data,
                tipo: tipoDocumento
            }
        ]
    }
}

module.exports = Fatura;