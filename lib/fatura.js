class Fatura {

    processadorDeBoletos(tipoDocumento, arrayBoletos){
        let totalPago = 0.00;
        let arr = [];

        for (let i = 0; i < arrayBoletos.length; i++) {
            totalPago += arrayBoletos[i].valor;
            arr.push({
                valorPago: arrayBoletos[i].valor,
                data: arrayBoletos[i].data,
                tipo: tipoDocumento
            });
        }
        if(totalPago >= this.valorTotal)
            this.status = 1

        return arr;
    }
}

module.exports = Fatura;