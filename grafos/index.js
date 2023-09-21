"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista_encadeada_dupla_1 = require("../lista_encadeada_dupla");
var fs = require("fs");
var Grafo = /** @class */ (function () {
    function Grafo(n) {
        this.num_vertices = n;
        var matriz = [];
        var listas = [];
        for (var i = 0; i < n; i++) {
            matriz.push([]);
            listas.push(new lista_encadeada_dupla_1.Lista());
            for (var j = 0; j < n; j++) {
                matriz[i].push(0);
            }
        }
        this.matriz = matriz;
        this.lista = listas;
    }
    Object.defineProperty(Grafo.prototype, "setMatriz", {
        set: function (matriz) {
            this.matriz = matriz;
        },
        enumerable: false,
        configurable: true
    });
    Grafo.prototype.print = function () {
        console.log(this.matriz);
        console.log(this.lista);
    };
    return Grafo;
}());
function start() {
    var matriz = JSON.parse(fs.readFileSync('./pcv4.json', 'utf8'));
    var graph = new Grafo(matriz.length);
    graph.matriz = matriz;
    return graph;
}
start();
