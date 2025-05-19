# ssgs-Calc

Semplice Calcolatrice

## Scopo del Progetto

Questo progetto implementa una calcolatrice a riga di comando scritta in Node.js. La calcolatrice consente di eseguire operazioni matematiche di base, tra cui:

- Addizione
- Sottrazione
- Moltiplicazione
- Divisione

L'utente può interagire con il programma tramite il terminale, selezionando l'operazione desiderata e inserendo i numeri richiesti. Il programma gestisce anche errori di input, richiedendo nuovamente i parametri in caso di valori non validi.

## Prerequisiti

Prima di eseguire il progetto, assicurati di avere i seguenti prerequisiti:

- **Node.js**: Versione >= 20.0.0. Puoi verificare la versione installata con il comando: node -v nel terminale della bash

## Come installare il progetto
1. Clona o scarica il progetto nella tua macchina:
    git clone https://github.com/JAMES-FOTSING/ssgs-Calc

2. Apri un terminale e posizionati nella directory del progetto:
    cd ssgs-Calc

3. Installa le dipendenze necessarie:
    npm install

## Come Eseguire il Programma
1. Avvia il programma con il comando:
    npm start

2. Segui le istruzioni mostrate nel terminale per selezionare un'operazione e inserire i numeri.

Esempio di Interazione:
//
Benvenuto nella Calcolatrice!
Operazioni disponibili:
1. Addizione
2. Sottrazione
3. Moltiplicazione
4. Divisione
5. Esci
Seleziona un'operazione (1-5): 1
Inserisci il primo numero: 10
Inserisci il secondo numero: 5
Risultato: 15
Grazie per aver usato la calcolatrice. Arrivederci!
//

## Come Eseguire i Test

1. Esegui il commando:
    npm test

2. verrà generato un report di copertura del codice. Puoi visualizzarlo nella console o aprire il file coverage/lcov-report/index.html in un browser per un report dettagliato.

**Obiettivo di Coverage**
Il progetto mira a raggiungere il 100% di code coverage. I test verificano tutte le funzionalità principali, inclusa la gestione degli errori.

**Funzionalità Implementate**
Operazioni di base: Addizione, Sottrazione, Moltiplicazione, Divisione.
Gestione degli errori: Se l'utente inserisce un valore non valido, il programma richiede di reinserire un parametro corretto.
Opzione di uscita: L'utente può selezionare l'opzione "Esci" per terminare il programma.


**Funzionalità Aggiuntive**
-Sessione continua: Non implementata, ma può essere aggiunta per consentire all'utente di eseguire più operazioni senza riavviare il programma.

-messaggio di benvenuto o di uscita.

## Struttura del Progetto
La struttura del progetto è organizzata come segue:     

ssgs-Calc/    
&emsp; src/ <br>
&emsp;&emsp;  [calcolatrice.js]   # File principale per l'interfaccia a riga di comando <br>
&emsp; &emsp; [operazioni.js]     # Modulo con le funzioni matematiche<br>
&emsp; tests/<br>
&emsp;&emsp;  [operazioni.test.js] # Test per il modulo operazioni<br>
[package.json]         # Configurazione del progetto e dipendenze    
[package-lock.json]    # Configurazione del progetto e dipendenze    
[README.md]            # Documentazione del progetto

## CI/CD
Il progetto può essere configurato per utilizzare GitHub Actions per l'integrazione continua. workflow per eseguire i test automaticamente e fare la verifica della coverage:

name: Build and Test

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the repository
      - name: Checkout repository
        uses: actions/checkout@v4

      # Step 2: Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      # Step 3: Install dependencies
      - name: Install dependencies
        run: npm ci

      # Step 4: Run tests
      - name: Run tests
        run: npm test -- --coverage

      # Step 5: Upload coverage report
      - name: Upload coverage report
        uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage
