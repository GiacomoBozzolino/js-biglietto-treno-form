// variabili generiche

let button = document.getElementById ('price_button')
let clear = document.getElementById ('cancella')
let sconto
let biglietto = document.getElementById('biglietto')

// interazione col bottone
if (button) {
    button.addEventListener('click', function() {
        // variabili con value
        let km = document.getElementById ('km').value
        let anni= document.getElementById ('anni').value
        let nome= document.getElementById ('nome').value
        let prezzo= km * 0.21
        // sconto minorenni
        if (anni < 18 ){
            sconto = prezzo * 0.8
            console.log(sconto)
            biglietto.innerHTML = `Ciao ${nome} hai diritto ad uno sconto del 20%. Costo del biglietto ${sconto.toFixed(2)} €`
            console.log(biglietto)
        }
    //  sconto pensionati
        else if (anni > 65) {
            let sconto_2 = prezzo * 0.6
            biglietto.innerHTML = `Ciao ${nome} hai diritto ad uno sconto del 40%. Costo del biglietto ${sconto_2.toFixed(2)} €`
            console.log (sconto_2)
        }
//    prezzo pieno
        else{
            if((anni > 17) && (anni < 66 )) {
                 prezzo 
                 biglietto.innerHTML = `Ciao ${nome} hai diritto ad un biglietto standard. Costo del biglietto ${prezzo.toFixed(2)} €`
                console.log (prezzo)
            
        } 

        }
    }); 

}

