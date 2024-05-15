import { faker } from '@faker-js/faker';

export const CONTATRANSF = {
    contaOrigem: 0,
    contaDestino: 1,
    valorTransf: faker.finance.amount({ min: 100, max: 50000})
}