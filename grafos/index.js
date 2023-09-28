"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lista_encadeada_dupla_1 = require("../lista_encadeada_dupla");
var pilha_vetor_1 = require("../pilha_vetor");
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
    Grafo.prototype.setLista = function (matriz) {
        var _this = this;
        matriz.forEach(function (array, i) {
            array.forEach(function (num, j) {
                if (num != 0) {
                    _this.lista[i].appendFim(j);
                }
            });
        });
    };
    Grafo.prototype.get_distancia = function (item1, item2) {
        var distancia = this.busca_distancia(item1);
        if (distancia[item2])
            return distancia[item2];
        else
            return "Não há caminho entre os dois vértices!";
    };
    Grafo.prototype.busca_distancia = function (source) {
        var dist = [];
        var passou = [];
        var pilha = new pilha_vetor_1.Pilha(this.lista[0].tam);
        for (var i = 0; i < this.num_vertices; i++) {
            passou[i] = false;
        }
        dist[source] = 0;
        passou[source] = true;
        pilha.inserir(source);
        var _loop_1 = function () {
            var top_1 = pilha.remover();
            if (typeof (top_1) == 'number') {
                this_1.matriz[top_1].forEach(function (item, i) {
                    if (!passou[i] && item != 0 && typeof (top_1) == 'number') {
                        dist[i] = dist[top_1] + 1;
                        pilha.inserir(i);
                        passou[i] = true;
                    }
                });
            }
        };
        var this_1 = this;
        while (!pilha.vazia()) {
            _loop_1();
        }
        return dist;
    };
    Grafo.prototype.busca_profundidade = function (source) {
    };
    Grafo.prototype.print = function () {
        console.log(this.matriz);
        console.log(this.lista);
    };
    return Grafo;
}());
function iniciar_grafo() {
    var matriz = JSON.parse(fs.readFileSync('./pcv4.json', 'utf8'));
    var graph = new Grafo(matriz.length);
    graph.matriz = matriz;
    graph.setLista(matriz);
    return graph;
}
var graph = iniciar_grafo();
console.log(graph);
console.log(graph.get_distancia(3, 0));
console.log(graph.busca_profundidade(0));
