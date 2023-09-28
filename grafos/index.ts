import { Lista, content } from "../lista_encadeada_dupla"
import { Pilha } from "../pilha_vetor"
import * as fs from 'fs';

type Matriz = Array<Array<number>>

class Grafo {
    num_vertices: number;
    matriz: Matriz;
    lista: Lista[];

    constructor(n: number) {
        this.num_vertices = n;
        let matriz: Matriz = [];
        let listas: Lista[] = [];

        for (let i = 0; i < n; i++) {
            matriz.push([])
            listas.push(new Lista())

            for (let j = 0; j < n; j++) {
                matriz[i].push(0)
            }
        }

        this.matriz = matriz;
        this.lista = listas;
    }

    set setMatriz(matriz: Matriz) {
        this.matriz = matriz;
    }

    setLista(matriz: Matriz): void {
        matriz.forEach((array, i) => {
            array.forEach((num, j) => {
                if (num != 0) {
                    this.lista[i].appendFim(j)
                }
            })
        })
    }

    get_distancia(item1: number, item2: number) {
        var distancia: number[] = this.busca_distancia(item1)["distancia"]
        if (distancia[item2]) return distancia[item2]
        else return "Não há caminho entre os dois vértices!"
    }

    busca_distancia(source: number){
        const dist: number[] = []
        const from: number[] = []
        const pilha: Pilha = new Pilha(this.num_vertices)

        for(let i = 0; i < this.num_vertices; i++){
            dist[i] = -1
            from[i] = 0
        }

        dist[source] = 0
        pilha.inserir(source)

        while (!pilha.vazia()){
            const ver = pilha.remover() 

            if (ver){
                this.matriz[ver].forEach((dist_atual,i) => {
                    if(dist[i] == -1 && dist_atual != 0){
                        dist[i] = dist[ver] + 1
                        from[i] = ver
                        pilha.inserir(i)
                    }
                }) 
            }
        }

        return {
                'distancia': dist,
                'origem': from
            }
    }

    busca_profundidade(source: number) {

    }

    print(): void {
        console.log(this.matriz)
        console.log(this.lista)
    }
}

function iniciar_grafo(): Grafo {
    let matriz: Matriz = JSON.parse(fs.readFileSync('./pcv4.json', 'utf8'));
    let graph: Grafo = new Grafo(matriz.length)

    graph.matriz = matriz;
    graph.setLista(matriz)

    return graph;
}

var graph: Grafo = iniciar_grafo()
console.log(graph)
console.log(graph.busca_distancia(3))
// console.log(graph.busca_profundidade(0))