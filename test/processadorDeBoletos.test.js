const Fatura = require('../lib/fatura');
const { toBeDeepCloseTo } = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const fatura = new Fatura();

describe('Processador de Boletos' , () => {
    
    test('Fatura: 1.500,00 / Boletos: 500,00; 400,00; 600,00 / Fatura PAGA e três pagamentos' , () => {
        fatura.nomeCliente = 'Joao das Couves';
        fatura.data = new Date(2021,1,1);
        fatura.valorTotal = 1500.00;
        fatura.status = 0;

        const boleto1 = {
            codigo: '34191790010104351004791020150008885180050000',
            data: new Date(2021,2,1),
            valor: 500.00
        };
        const boleto2 = {
            codigo: '34191790010104351004791020150008285460040000',
            data: new Date(2021,3,1),
            valor: 400.00
        };
        const boleto3 = {
            codigo: '34191790010104351004791020150008885770060000',
            data: new Date(2021,4,1),
            valor: 600.00
        };
        const arr = [boleto1, boleto2, boleto3];

        const pagamentos = fatura.processadorDeBoletos('boletos',arr);
        
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
});