var Joc = {
    estat : 0,
    puntJugador : 0,
    puntMaxJugador : 0,
    peçaVigent : [],
    peçaSeguent : [],
    comptadorPeces : 0,
    interval : 1000,
    espai : new Array(),
    iniEspai : function(){
        this.puntJugador = 0;
        for (var i = 0; i < 25; i++) {
            this.espai.push([0,0,0,0,0,0,0,0,0,0]);
        }
        
    },
    calcPesaSeg : function(){
        var peces = [
            [[[0,0,0,0,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0],[0,0,0,0,0,0]],"groc"],
            [[[0,1,0,0],[0,1,0,0],[0,0,1,1,0,0],[0,0,1,1,0,0]],"cel"]
        ]
    },
    teclaClic : function(){
        
    },
    movPesa : function(){
        
    }
};