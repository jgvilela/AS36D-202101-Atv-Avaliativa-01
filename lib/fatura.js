class Fatura {

    processadorDeBoletos(tipo, arrayBoletos){
        this.status = 1;
        return [
            {   
                valorPago: 500.00,
                data: Date(2021,2,1),
                tipo: 'boleto'
            },
            {   
                valorPago: 400.00,
                data: Date(2021,3,1),
                tipo: 'boleto'
            },
            {   
                valorPago: 600.00,
                data: Date(2021,4,1),
                tipo: 'boleto'
            }
        ]
    }
}

module.exports = Fatura;