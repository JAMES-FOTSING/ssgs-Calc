const readline = require('readline');
const operazioni = require('./operazioni');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Benvenuto nella Calcolatrice!");
console.log("Operazioni disponibili:");
console.log("1. Addizione");
console.log("2. Sottrazione");
console.log("3. Moltiplicazione");
console.log("4. Divisione");
console.log("5. Esci");

rl.question("Seleziona un'operazione (1-5): ", (scelta) => {
    if (scelta === '5') {
        console.log("Grazie per aver usato la calcolatrice. Arrivederci!");
        rl.close();
        return;
    }

    if (!['1', '2', '3', '4'].includes(scelta)) {
        console.error("Operazione non valida. Uscita dal programma.");
        rl.close();
        return;
    }

    const chiediNumero = (domanda, callback) => {
        rl.question(domanda, (input) => {
            const numero = parseFloat(input);
            if (isNaN(numero)) {
                console.error("Parametro non valido. Per favore, inserisci un numero valido.");
                chiediNumero(domanda, callback);
            } else {
                callback(numero);
            }
        });
    };

    chiediNumero("Inserisci il primo numero: ", (a) => {
        chiediNumero("Inserisci il secondo numero: ", (b) => {
            try {
                let risultato;
                switch (scelta) {
                    case '1':
                        risultato = operazioni.addizione(a, b);
                        break;
                    case '2':
                        risultato = operazioni.sottrazione(a, b);
                        break;
                    case '3':
                        risultato = operazioni.moltiplicazione(a, b);
                        break;
                    case '4':
                        risultato = operazioni.divisione(a, b);
                        break;
                }
                console.log(`Risultato: ${risultato}`);
            } catch (error) {
                console.error(`Errore: ${error.message}`);
            } finally {
                console.log("Grazie per aver usato la calcolatrice. Arrivederci!");
                rl.close();
            }
        });
    });
});