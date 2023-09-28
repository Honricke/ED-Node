import { Grafo } from './grafos'
import * as fs from 'fs';

function iniciar_grafo(): Grafo {
    let matriz = JSON.parse(fs.readFileSync('./pcv.json', 'utf8'));
    let graph: Grafo = new Grafo(matriz.length)

    graph.matriz = matriz;
    graph.setLista(matriz)

    return graph;
}

const graph: Grafo = iniciar_grafo()

console.log("============== MOSTRANDO ESTRUTURA DO GRAFO ==============")

console.log(graph) //Mostra a Lista Encadeada e a Matriz

console.log("============== DISTÂNCIA ENTRE DOIS VÉRTICES ==============")

console.log(graph.get_distancia(3,5)) //Pega a distância entre x e y

console.log("============== PROFUNDIDADE COM RECURSIVIDADE ==============")

graph.busca_profundidade(0) //Essa busca usa recursividade

console.log("============== PROFUNDIDADE COM PILHA ==============")

graph.busca_profundidade2(0) //Essa busca usa pilha para não precisar de recursividade