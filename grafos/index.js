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
        var distancia = this.busca_distancia(item1)["distancia"];
        if (distancia[item2])
            return distancia[item2];
        else
            return "Não há caminho entre os dois vértices!";
    };
    Grafo.prototype.busca_distancia = function (source) {
        var dist = [];
        var from = [];
        var pilha = new pilha_vetor_1.Pilha(this.num_vertices);
        for (var i = 0; i < this.num_vertices; i++) {
            dist[i] = -1;
            from[i] = 0;
        }
        dist[source] = 0;
        pilha.inserir(source);
        var _loop_1 = function () {
            var ver = pilha.remover();
            if (ver) {
                this_1.matriz[ver].forEach(function (dist_atual, i) {
                    if (dist[i] == -1 && dist_atual != 0) {
                        dist[i] = dist[ver] + 1;
                        from[i] = ver;
                        pilha.inserir(i);
                    }
                });
            }
        };
        var this_1 = this;
        while (!pilha.vazia()) {
            _loop_1();
        }
        return {
            'distancia': dist,
            'origem': from
        };
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
console.log(graph.busca_distancia(3));
// console.log(graph.busca_profundidade(0))
