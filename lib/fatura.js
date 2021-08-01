class Fatura {

    processadorDeBoletos(tipo, arrayBoletos){
        let totalPago = 0.00;
        for (let i = 0; i < arrayBoletos.length; i++) {
            totalPago += arrayBoletos[i].valor;
        }
        if(this.valorTotal >= totalPago)
            this.status = 1
        
        return [
            {   
                valorPago: arrayBoletos[0].valor,
                data: arrayBoletos[0].data,
                tipo: 'boleto'
            },
            {   
                valorPago: arrayBoletos[1].valor,
                data: arrayBoletos[1].data,
                tipo: 'boleto'
            },
            {   
                valorPago: arrayBoletos[2].valor,
                data: arrayBoletos[2].data,
                tipo: 'boleto'
            }
        ]
    }
}

module.exports = Fatura;