var linguaggi=[
    "python",
    "javascript",
    "java",
    "c",
    "go",
    "rust",
    "kotlin",
    "swift",
    "php",
    "ruby",
    "typescript",
    "html",
    "css",
    "r",
    "julia",
    "dart",
    "matlab",
    "assembly",
    "lua",
    "gdscript"
]

let risposta='';
let maxErrori=10;
let errori=0;
let indovinata=[];
let parolaIndovinare="";

function RandomParola(){
    risposta=linguaggi[Math.floor(Math.random() * linguaggi.length)];
}

function GeneraTastiera(){
    let lettere='abcdefghijklmnopqrstuvwxyz';
    let bottoni='';
    for(let i=0; i<lettere.length; i++){
        let lettera=lettere[i];
        bottoni += `<button id="${lettera}" style="background-color: #17a2b8; color: white; font-family: Arial;" onclick="controllaLettera('${lettera}')">${lettera}</button>`;
    }

    document.getElementById("tastiera").innerHTML = bottoni;
}

function controllaLettera(lettera){
    if(!indovinata.includes(lettera)){
        indovinata.push(lettera);
    }

    document.getElementById(lettera).disabled = true;
    document.getElementById(lettera).style.backgroundColor = "grey"; 

    if(risposta.includes(lettera)) {
        ParolaDaIndovinare();
        controlloVittoria();
    }

    else if (!risposta.includes(lettera)) {
        errori++;
        document.getElementById("errori").innerHTML = errori;
        controlloPerso();
        document.getElementById("immagineImpiccato").src = `immagini/HangMan_${errori+1}.gif`;
    }
}

function controlloVittoria(){
    let parolaCorrente = "";
    for (let i = 0; i < risposta.length; i++) {
        parolaCorrente += risposta[i];
    }
    
    if(parolaCorrente===risposta){
        document.getElementById("tastiera").innerHTML="hai vinto!"
        document.getElementById("immagineImpiccato").src="immagini/HangMan_WIN.gif";
    }
}

function controlloPerso(){
    if(errori===maxErrori){
        document.getElementById("parolaDaIndovinare").innerHTML="la risposta:"+risposta;
        document.getElementById("tastiera").innerHTML="hai perso";
        document.getElementById("immagineImpiccato").src="immagini/HangMan_11.gif";
    }
}
 
function ParolaDaIndovinare(){
    parolaIndovinare = "";
    for (let i = 0; i < risposta.length; i++) {
        let lettera = risposta[i];

        if(indovinata.includes(lettera)){
            parolaIndovinare+=lettera
        }
        else{
            parolaIndovinare+=" _ ";
        }

    }
    document.getElementById("parolaDaIndovinare").innerHTML = parolaIndovinare;
}

function BottoneReset(){
    errori=0;
    indovinata=[];
    document.getElementById("immagineImpiccato").src="immagini/HangMan_1.gif";
    document.getElementById("errori").innerHTML=errori 
    RandomParola();
    ParolaDaIndovinare();
    GeneraTastiera();
}

document.getElementById("maxErrori").innerHTML=maxErrori;

RandomParola();
GeneraTastiera();
ParolaDaIndovinare();
