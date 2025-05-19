const operazioni = require('../src/operazioni');

describe('Operazioni matematiche', () => {
    test('Addizione: 2 + 3 = 5', () => {
        expect(operazioni.addizione(2, 3)).toBe(5);
    });

    test('Sottrazione: 5 - 3 = 2', () => {
        expect(operazioni.sottrazione(5, 3)).toBe(2);
    });

    test('Moltiplicazione: 4 * 3 = 12', () => {
        expect(operazioni.moltiplicazione(4, 3)).toBe(12);
    });

    test('Divisione: 6 / 2 = 3', () => {
        expect(operazioni.divisione(6, 2)).toBe(3);
    });

    test('Divisione per zero genera un errore', () => {
        expect(() => operazioni.divisione(6, 0)).toThrow("Divisione per zero non consentita.");
    });
});