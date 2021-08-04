const Pagamento = require('../lib/pagamento');
class Fatura {

    retornaTotalPago(arrayBoletos){
        return arrayBoletos.reduce((acumulador, elemento) => acumulador += elemento.valor,0);
    }

    retornaArrayPagamentos(tipoDocumento, arrayBoletos){
        return arrayBoletos.map(function(item){
            return new Pagamento(item.valor, item.data, tipoDocumento)
         });;
    }

    processadorDeBoletos(tipoDocumento, arrayBoletos){
        
        this.status = (this.retornaTotalPago(arrayBoletos) >= this.valorTotal ? 1 : 0);
        return this.retornaArrayPagamentos(tipoDocumento, arrayBoletos);
    }
}

module.exports = Fatura;