var Joc = {
    estat: 0,
    puntJugador: 0,
    puntMaxJugador: 0,
    pesaVigent: [],
    pesaSeguent: [],
    comptadorPeces: [i = 0, j = 0, l = 0, o = 0, s = 0, t = 0, z = 0],
    interval: 1000,
    nivell: 0,
    espai: new Array(),

    //Funció que inicialitza el joc
    iniJoc: function () {
        this.puntJugador = 0;
        this.nivell = 1;
        for (var i = 0; i < 25; i++) {
            this.espai.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        this.pesaVigent = GeneraPesaAleatoria();
        this.calcPesaSeg();
    },
    mostraPuntuacions: function () {
        document.write("<br>Puntuació: " + this.puntJugador);
        document.write("<br>Puntuació Màxima: " + this.puntMaxJugador);
        document.write("<br>Nivell: " + this.nivell);
    },
    //Funció encarregada de mostrar l'espai(mapa, puntuacions i nivell)
    mostraEspai: function () {
        for (var i = 0; i < this.espai.length; i++) {
            document.write(this.espai[i] + "<br>");
        }
    },
    //Funció encarregada de calcular quina serà la següent peça en caure
    calcPesaSeg: function () {
        this.pesaSeguent = GeneraPesaAleatoria();
    },
    //Funció encarregada de la gestió de la interacció de teclat de l'usuari
    teclaClic: function () {
        //onKeyDown -> executa mètodes "moure" de Pesa
    },
    //Funció que realitza el moviment automàtic del joc cada cert interval de temps
    movimentAutomaticJoc: function () {
        //setInterval
        console.log(this.pesaVigent);
        //console.log("Posició inicial Y :" + this.pesaVigent);
        if ((this.pesaVigent.y >= 0) && (this.pesaVigent.y < 25)) {
            this.pesaVigent.y += 1;
        }
        //console.log("Posició Y:" + this.pesaVigent.y);
        
        if(this.pesaVigent.y === 24){ //  ||la y seguent coincideix amb una pesa
            //Parar pesa i que surti la seguent
            this.pesaVigent = this.pesaVigent;
            this.calcPesaSeg();
        }
    }
};

var Pesa = function (forma, color, x, y) {
    this.forma = forma;
    this.color = color;
    this.x = x;
    this.y = y;

    this.rotarDreta = function () {
        var formaNova = new Array();
        for (var i = 0; i < this.forma.length; i++) {
            formaNova[i] = new Array();
            for (var j = 0; j < this.forma[i].length; j++) {
                formaNova[i][j] = this.forma[this.forma[i].length - 1 - j][i];
            }
        }
        this.forma = formaNova;
    };

    //Per rotar cap a l'esquerra, s'executa 3 cops el mètode per rotar cap a la dreta.
    this.rotarEsquerra = function () {
        for (var i = 0; i < 3; i++) {
            this.rotarDreta();
        }
    };

    //Mètode per disminuir la posició x de la peça (moure la peça cap a la esquerra).
    //Si en disminuir la posició, no sobrepassa el límit de la matriu, es mourà.
    this.moureEsquerra = function () {
        if ((this.x - 1) >= 0) {
            this.x -= 1;
        }
    };

    //Mètode per augmentar la posició x de la peça (moure la peça cap a la dreta).
    //Si en augmentar la posició, no sobrepassa el límit de la matriu, es mourà.
    this.moureDreta = function () {
        if ((this.x + 1) < 10) {
            this.x += 1;
        }
    };

    this.getForma = function () {
        return this.forma;
    };
};

function GeneraPesaAleatoria() {
    var peces = [
        [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], "groc"],
        [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]], "lila"],
        [[[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]], "verd"],
        [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 0]], "roig"],
        [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]], "blau"],
        [[[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], "taronja"],
        [[[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], "morat"]
    ];
    var numeroAleatori = Math.round(Math.random() * 6);
    return new Pesa(peces[numeroAleatori][0], peces[numeroAleatori][1], 4, 0);
    //return peces[numeroAleatori];
}

//Joc
Joc.iniJoc();
console.log(Joc.pesaVigent);
//setInterval(Joc.movimentAutomaticJoc, Joc.interval);

//document.getElementById("mapa").innerHTML = Joc.mostraEspai();
/*document.getElementById("mapa").innerHTML = ("<br>Puntuació: " + 
        Joc.puntJugador + "<br>Puntuació Màxima: " + Joc.puntMaxJugador +
        "<br>Nivell: " + Joc.nivell);*/