"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grafos_1 = require("./grafos");
var fs = require("fs");
function iniciar_grafo() {
    var matriz = JSON.parse(fs.readFileSync('./pcv.json', 'utf8'));
    var graph = new grafos_1.Grafo(matriz.length);
    graph.matriz = matriz;
    graph.setLista(matriz);
    return graph;
}
var graph = iniciar_grafo();
console.log("============== MOSTRANDO ESTRUTURA DO GRAFO ==============");
console.log(graph); //Mostra a Lista Encadeada e a Matriz
console.log("============== DISTÂNCIA ENTRE DOIS VÉRTICES ==============");
console.log(graph.get_distancia(3, 5)); //Pega a distância entre x e y
console.log("============== PROFUNDIDADE COM RECURSIVIDADE ==============");
graph.busca_profundidade(0); //Essa busca usa recursividade
console.log("============== PROFUNDIDADE COM PILHA ==============");
graph.busca_profundidade2(0); //Essa busca usa pilha para não precisar de recursividade
