var Joc = {
    estat: 0,
    puntJugador: 0,
    puntMaxJugador: 0,
    peçaVigent: [],
    peçaSeguent: [],
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
    },
    //Funció encarregada de mostrar l'espai(mapa, puntuacions i nivell)
    mostraEspai: function () {
        for (var i = 0; i < this.espai.length; i++) {
            document.write(this.espai[i] + "<br>");
        }
        document.write("<br>Puntuació: " + this.puntJugador);
        document.write("<br>Puntuació Màxima: " + this.puntMaxJugador);
        document.write("<br>Nivell: <br>");
    },
    //Funció encarregada de calcular quina serà la següent peça en caure
    calcPesaSeg: function () {
        var peces = [
            [[[1, 1], [1, 1]], "groc"],
            [[[0, 0, 0], [1, 0, 0], [1, 1, 1]], "blau"],
            [[[0, 0, 0], [0, 0, 1], [1, 1, 1]], "taronja"],
            [[[0, 0, 0], [0, 1, 1], [1, 1, 0]], "verd"],
            [[[0, 0, 0], [0, 1, 0], [1, 1, 1]], "lila"],
            [[[0, 0, 0], [1, 1, 0], [0, 1, 1]], "vermell"],
            [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]], "cel"]
        ];
        var rand = Math.floor(Math.random() * (7 - 0) + 0);
        return peces[rand];
    },
    //Funció encarregada de la gestió de la interacció de teclat de l'usuari
    teclaClic: function () {
        //onKeyDown
    },
    //Funció que realitza el moviment automàtic del joc cada cert interval de temps
    movPesa: function () {
        //setInterval
    }
};

Joc.iniJoc();
Joc.mostraEspai();
document.write("<br>Test Seguent Pesa: <br>")
for (var i = 0; i < 5; i++) {
    document.write(Joc.calcPesaSeg() + "<br>");
}
