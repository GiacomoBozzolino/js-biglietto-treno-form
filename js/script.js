// variabili generiche
let km = document.getElementById ('km').value="";
let anni= document.getElementById ('anni').value="";
let nome= document.getElementById ('nome').value="";

let button = document.getElementById ('price_button');
let clear = document.getElementById ('cancella');
let sconto;
let biglietto = document.getElementById('biglietto');

// interazione col bottone
if (button) {
    button.addEventListener('click', function() {
        // variabili con value
        km = document.getElementById ('km').value;
        anni= parseInt(document.getElementById ('anni').value);
        nome= document.getElementById ('nome').value;
        let prezzo= km * 0.21;
        let sconto
        let discount
        // sconto minorenni
        if (anni < 18 ){
            sconto = prezzo * 0.8;
            discount= '20%'
            console.log(sconto);
            biglietto.innerHTML = `Ciao ${nome} hai diritto ad uno sconto del 20%. Costo del biglietto ${sconto.toFixed(2)} €`;
            console.log(biglietto);
        }
    //  sconto pensionati
        else if (anni > 65) {
            sconto = prezzo * 0.6;
            discount = '40%'
            biglietto.innerHTML = `Ciao ${nome} hai diritto ad uno sconto del 40%. Costo del biglietto ${sconto.toFixed(2)} €`;
            console.log(discount)
        }

//    prezzo pieno
        else{   
            discount= '/'
            sconto = prezzo 
            biglietto.innerHTML = `Ciao ${nome} hai diritto ad un biglietto standard. Costo del biglietto ${sconto.toFixed(2)} €`;
            console.log (prezzo);   
        } 
        document.getElementById('show-name').innerText = nome;
        document.getElementById('show-km').innerText = km;
        document.getElementById('show-discount').innerText = discount;
        document.getElementById('show-price').innerText = sconto.toFixed(2) + '€';
    }); 
}

// interazione col bottone cancella
if (cancella) {
    cancella.addEventListener('click', function() {
        let km = document.getElementById('km').value = "";
        let anni= document.getElementById ('anni').value="";
        let nome= document.getElementById ('nome').value="";
        biglietto.innerHTML= "";
        document.getElementById('show-name').innerText = "";
        document.getElementById('show-km').innerText = "";
        document.getElementById('show-discount').innerText = "";
        document.getElementById('show-price').innerText = "";
    }); 
}