var Joc = {
    estat: 0,
    puntJugador: 0,
    puntMaxJugador: 0,
    pesaVigent: [],
    pesaSeguent: [],
    comptadorPeces: [i = 0, j = 0, l = 0, o = 0, s = 0, t = 0, z = 0],
    interval: 100,
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
        this.mostraEspai();
        this.mostraPuntuacions();
    },
    mostraPuntuacions: function () {
        document.getElementById("puntuacions").innerHTML = ("<br>Puntuació: " +
                Joc.puntJugador + "<br>Puntuació Màxima: " + Joc.puntMaxJugador +
                "<br>Nivell: " + Joc.nivell);
    },
    //Funció encarregada de mostrar l'espai(mapa, puntuacions i nivell)
    mostraEspai: function () {
        var canvas = document.getElementById("mapa");
        var context = canvas.getContext("2d");
        var img;
        for (var i = 0; i < this.espai.length; i++) {
            for (var j = 0; j < this.espai[i].length; j++) {
                if (this.espai[i][j] === 0) {
                    img = document.getElementById("blanc");
                }
                if (this.espai[i][j] === "i") {
                    img = document.getElementById("blau");
                }
                if (this.espai[i][j] === "j") {
                    img = document.getElementById("rosa");
                }
                if (this.espai[i][j] === "l") {
                    img = document.getElementById("taronja");
                }
                if (this.espai[i][j] === "o") {
                    img = document.getElementById("lila");
                }
                if (this.espai[i][j] === "s") {
                    img = document.getElementById("vermell");
                }
                if (this.espai[i][j] === "t") {
                    img = document.getElementById("verd");
                }
                if (this.espai[i][j] === "z") {
                    img = document.getElementById("groc");
                }
                context.drawImage(img, j * 16, i * 16, 15, 15);
            }
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
        var interval = setInterval(function () {
            console.log(Joc.pesaVigent);
            if ((Joc.pesaVigent.y >= 0) && (Joc.pesaVigent.y < 25) && (Joc.espai[Joc.pesaVigent.y + 1][Joc.pesaVigent.x] !== 1)) {
                Joc.pesaVigent.y += 1;
            }else{
                clearInterval(interval);
            }

            if ((Joc.pesaVigent.y === 24) || (Joc.espai[Joc.pesaVigent.y + 1][Joc.pesaVigent.x] === 1)) {
                //Fer desapareixer pesa
                //clearInterval(interval);
                Joc.pesaVigent = Joc.pesaSeguent;
                Joc.calcPesaSeg();
            }

        }, Joc.interval);
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

window.onload = function () {
    Joc.iniJoc();
    Joc.movimentAutomaticJoc();
};