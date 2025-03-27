class GiocoImpiccato {

    constructor(listaParola) {
      this.listaParola = listaParola;
      this.maxErrori = 10;
      this.risposta = '';
      this.errori = 0;
      this.ListaLettere = [];
      this.parolaNascosta = '';
    }
  
    RandomParola() {
      this.risposta = this.listaParola[Math.floor(Math.random() * this.listaParola.length)];
    }
  
    GeneraTastiera() {
      const lettere = 'abcdefghijklmnopqrstuvwxyz';
      let bottoni = '';
  
      for (let lettera of lettere) {
        bottoni += `<button id="${lettera}" style="background-color: #17a2b8; color: white; font-family: Arial;" onclick="gioco.controllaLettera('${lettera}')">${lettera}</button>`;
      }
  
      document.getElementById("tastiera").innerHTML = bottoni;
    }
  
    controllaLettera(lettera) {
      if (!this.ListaLettere.includes(lettera)) {
        this.ListaLettere.push(lettera);
      }
  
      document.getElementById(lettera).disabled = true;
      document.getElementById(lettera).style.backgroundColor = "grey";
  
      if (this.risposta.includes(lettera)) {
        this.ParolaDaIndovinare();
        this.controlloVittoria();
      } 
      
      else {
        this.errori++;
        document.getElementById("errori").innerHTML = this.errori;
        this.controlloPerso();
        document.getElementById("immagineImpiccato").src = `immagini/HangMan_${this.errori + 1}.gif`;
      }

    }
  
    controlloVittoria() {
      let parolaCorrente = '';
      for (let i = 0; i < this.risposta.length; i++) {
        let lettera= this.risposta[i];
        
        if (this.ListaLettere.includes(lettera)) {
            parolaCorrente += lettera;
        }
        else {
            parolaCorrente += " _ ";
        }
      }
      
      if (parolaCorrente === this.risposta) {
        document.getElementById("tastiera").innerHTML = "hai vinto!";
        document.getElementById("immagineImpiccato").src = "immagini/HangMan_WIN.gif";
      }
    }
  
    controlloPerso() {
      if (this.errori === this.maxErrori) {
        document.getElementById("parolaDaIndovinare").innerHTML = "la risposta:" + this.risposta;
        document.getElementById("tastiera").innerHTML = "hai perso";
        document.getElementById("immagineImpiccato").src = "immagini/HangMan_11.gif";
      }
    }

    ParolaDaIndovinare() {
        let parolaCorrente = '';
        for (let i = 0; i < this.risposta.length; i++) {
          let lettera = this.risposta[i];
      
          if (this.ListaLettere.includes(lettera)) {
            parolaCorrente += lettera;
          } else {
            parolaCorrente += " _ ";
          }
        }
      
        this.parolaNascosta = parolaCorrente;
        document.getElementById("parolaDaIndovinare").innerHTML = this.parolaNascosta;
    }
      
    BottoneReset() {
      this.errori = 0;
      this.ListaLettere = [];
      document.getElementById("immagineImpiccato").src = "immagini/HangMan_1.gif";
      document.getElementById("errori").innerHTML = this.errori;
      this.RandomParola();
      this.ParolaDaIndovinare();
      this.GeneraTastiera();
    }
  }
  
  var listaParola=[
    "abaco", "abbaglio", "abbaino", "abbasso", "abbattere", "abbondanza", "abbraccio", "abdicare", "abile", "accadere",
    "bacio", "bagaglio", "bagnato", "balcone", "bambino", "banale", "barca", "baritono", "basilico", "battaglia",
    "calamaro", "campagna", "candela", "capolavoro", "carattere", "cascata", "castello", "cavallo", "celebrare", "cellulare",
    "danza", "debole", "delizioso", "dentista", "deserto", "dialogo", "difficile", "dinamico", "disegno", "divertente",
    "eccellente", "economico", "educato", "effetto", "elegante", "elemento", "energia", "entusiasta", "epoca", "eroe",
    "facile", "famoso", "fantastico", "felicità", "ferrovia", "festival", "figura", "filosofia", "finale", "fiore",
    "generoso", "gigante", "giornale", "giovane", "globo", "grande", "guida", "gusto", "grazia", "genuino",
    "hotel", "hobby", "hacker", "harem", "harakiri", "hidalgo", "hippy", "holding", "horror", "humus",
    "idea", "illuminato", "importante", "inizio", "intelligente", "inverno", "isola", "italiano", "identico", "idolo",
    "lago", "lampada", "libero", "limite", "logico", "luna", "luogo", "luminare", "largo", "leone",
    "magico", "mare", "melodia", "memoria", "meraviglia", "metodo", "moderno", "museo", "musica", "mistero",
    "natura", "necessario", "neve", "nobile", "notizia", "numero", "nascita", "noioso", "normale", "nuvola",
    "obiettivo", "occasione", "oceano", "offerta", "ombra", "opportuno", "orchestra", "orizzonte", "ottimista", "ovunque",
    "palazzo", "paradiso", "passione", "pensiero", "perfetto", "pianeta", "poesia", "positivo", "potente", "prezioso",
    "qualità", "quadro", "quiete", "quintale", "quadro", "quota", "quoziente", "questione", "quotidiano", "quercia",
    "radioso", "ragione", "rapido", "realizzare", "ricchezza", "rispetto", "romantico", "ridente", "rigido", "ruota",
    "saggio", "scienza", "speranza", "spettacolo", "spirito", "splendido", "stimolo", "successo", "sensibile", "sereno",
    "talento", "tenace", "tesoro", "tradizione", "tranquillo", "tattico", "turista", "torrente", "tigre", "tempesta",
    "universo", "utile", "umile", "ufficiale", "ulivo", "umanità", "umorismo", "ubriaco", "ultimo", "uranio",
    "valore", "verde", "vero", "viaggio", "vittoria", "vivace", "volontà", "vortice", "vacanza", "veloce",
    "zelo", "zucchero", "zaino", "zampillo", "zebra", "zenit", "zigzag", "zitto", "zona", "zuppa"
]
  
const gioco = new GiocoImpiccato(listaParola);
  
document.getElementById("maxErrori").innerHTML = gioco.maxErrori;
gioco.RandomParola();
gioco.GeneraTastiera();
gioco.ParolaDaIndovinare();
