const Fatura = require('../lib/fatura');
const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const fatura = new Fatura();

describe('Processador de Boletos' , () => {
    
    test('Fatura: 1.500,00 / Boletos: 500,00; 400,00; 600,00 / Fatura PAGA e três pagamentos' , () => {
        fatura.nomeCliente = 'Joao das Couves';
        fatura.data = Date(2021,1,1);
        fatura.valorTotal = 1500.00;
        //quando status igual a zero, a fatura não está paga. Quando for igual a 1, está paga.
        fatura.status = 0;

        const boleto1 = {
            codigo: '34191790010104351004791020150008885180050000',
            data: Date(2021,2,1),
            valor: 500.00
        };
        const boleto2 = {
            codigo: '34191790010104351004791020150008285460040000',
            data: Date(2021,3,1),
            valor: 400.00
        };
        const boleto3 = {
            codigo: '34191790010104351004791020150008885770060000',
            data: Date(2021,4,1),
            valor: 600.00
        };
        const arr = [boleto1, boleto2, boleto3];

        const pagamentos = fatura.processadorDeBoletos('boleto',arr);
        
        expect(fatura.status).toBe(1);
        expect(pagamentos.length).toBe(3);
        expect(pagamentos[0]).toBeDeepCloseTo({
            valorPago: 500.00,
            data: Date(2021,2,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[1]).toBeDeepCloseTo({
            valorPago: 400.00,
            data: Date(2021,3,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[2]).toBeDeepCloseTo({
            valorPago: 600.00,
            data: Date(2021,4,1),
            tipo: 'boleto'
        },2);
    });

    test('Fatura: 1.500,00 / Boletos: 1.000,00; 500,00; 250,00 / Fatura PAGA e três pagamentos' , () => {
        fatura.nomeCliente = 'Ana das Couves';
        fatura.data = Date(2021,1,1);
        fatura.valorTotal = 1500.00;
        fatura.status = 0;

        const boleto1 = {
            codigo: '34191790010104351004791020150008485180100000',
            data: Date(2021,2,1),
            valor: 1000.00
        };
        const boleto2 = {
            codigo: '34191790010104351004791020150008185460050000',
            data: Date(2021,3,1),
            valor: 500.00
        };
        const boleto3 = {
            codigo: '34191790010104351004791020150008485770025000',
            data: Date(2021,4,1),
            valor: 250.00
        };
        const arr = [boleto1, boleto2, boleto3];

        const pagamentos = fatura.processadorDeBoletos('boleto',arr);
        
        expect(fatura.status).toBe(1);
        expect(pagamentos.length).toBe(3);
        expect(pagamentos[0]).toBeDeepCloseTo({
            valorPago: 1000.00,
            data: Date(2021,2,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[1]).toBeDeepCloseTo({
            valorPago: 500.00,
            data: Date(2021,3,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[2]).toBeDeepCloseTo({
            valorPago: 250.00,
            data: Date(2021,4,1),
            tipo: 'boleto'
        },2);
    });

    test('Fatura: 2.000,00 / Boletos: 500,00; 400,00 / Fatura NÃO-PAGA e dois pagamentos' , () => {
        fatura.nomeCliente = 'Paulo das Couves Júnior';
        fatura.data = Date(2021,1,1);
        fatura.valorTotal = 2000.00;
        fatura.status = 0;

        const boleto1 = {
            codigo: '34191790010104351004791020150008885180050000',
            data: Date(2021,2,1),
            valor: 500.00
        };
        const boleto2 = {
            codigo: '34191790010104351004791020150008285460040000',
            data: Date(2021,3,1),
            valor: 400.00
        };
        const arr = [boleto1, boleto2];

        const pagamentos = fatura.processadorDeBoletos('boleto',arr);
        
        expect(fatura.status).toBe(0);
        expect(pagamentos.length).toBe(2);
        expect(pagamentos[0]).toBeDeepCloseTo({
            valorPago: 500.00,
            data: Date(2021,2,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[1]).toBeDeepCloseTo({
            valorPago: 400.00,
            data: Date(2021,3,1),
            tipo: 'boleto'
        },2);
    });

    test('Fatura: 1.000,00 / Boletos: 499,99; 500,00 / Fatura NÃO-PAGA e dois pagamentos' , () => {
        fatura.nomeCliente = 'Pedro das Couves Neto';
        fatura.data = Date(2021,1,1);
        fatura.valorTotal = 999.99;
        fatura.status = 0;

        const boleto1 = {
            codigo: '34191790010104351004791020150008885180049999',
            data: Date(2021,2,1),
            valor: 499.999
        };
        const boleto2 = {
            codigo: '34191790010104351004791020150008285460050000',
            data: Date(2021,3,1),
            valor: 500.00
        };
        const arr = [boleto1, boleto2];

        const pagamentos = fatura.processadorDeBoletos('boleto',arr);
        
        expect(fatura.status).toBe(1);
        expect(pagamentos.length).toBe(2);
        expect(pagamentos[0]).toBeDeepCloseTo({
            valorPago: 499.99,
            data: Date(2021,2,1),
            tipo: 'boleto'
        },2);
        expect(pagamentos[1]).toBeDeepCloseTo({
            valorPago: 500.00,
            data: Date(2021,3,1),
            tipo: 'boleto'
        },2);
    });
});