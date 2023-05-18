Problema: Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


1- sul file index inserire un input dove l'utente potrà inserire il numero di km 
2- sul file index creare un secondo input dove l'utente indicherà l'età del passeggero
3- sul file index creare un bottone 
4- creare le variabili relative al calcolo del biglietto e agli sconti 
5- creare un "ascolto di evento" al click del button
    5.1- ? SE l'età inserità sarò < di 18 allora verrà applicato uno sconto del 20%
    5.2- :? ALTRIMENTI SE l'età inserita è > di 65 verrà applicato uno sconto del 40%
    5.3- : ALTRIMENTI verrà applicato il prezzo pieno
    5.4- per recuperare le informazioni inserite dall'utente usare la proprietà .value
6- il totale andrà stampato in console
    6.1- Il totale va arrotondato alle prime 2 cifre decimali
 N.B. Solo dopo aver verificato il corretto funzionamento del punto 5 e 6:
7- utilizzare la funzione .innerHTML per stampare i dati inseriti dall'utente e il costo del biglietto in pagina 
8- Stilizzare il contenuto dell'html