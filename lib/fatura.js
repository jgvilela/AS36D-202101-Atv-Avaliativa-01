const Pagamento = require('../lib/pagamento');
class Fatura {

    processadorDeBoletos(tipoDocumento, arrayBoletos){
        let totalPago = 0.00;
        let arr = [];

        for (let i = 0; i < arrayBoletos.length; i++) {
            totalPago += arrayBoletos[i].valor;
            arr.push(new Pagamento(arrayBoletos[i].valor, arrayBoletos[i].data, tipoDocumento));
        }
        if(totalPago >= this.valorTotal)
            this.status = 1

        return arr;
    }
}

module.exports = Fatura;