import { type } from "os";
import { Lista, content } from "../lista_encadeada_dupla"
import { Pilha } from "../pilha_vetor"
import * as fs from 'fs';

type Matriz =  Array<Array<number>>

class Grafo{
    num_vertices: number;
    matriz: Matriz;
    lista: Lista[];

    constructor (n: number){
        this.num_vertices = n;
        let matriz: Matriz = [];
        let listas: Lista[] = [];

        for(let i = 0; i < n; i++){ 
            matriz.push([])
            listas.push(new Lista())

            for(let j= 0; j < n; j++){
                matriz[i].push(0)
            }
        }

        this.matriz = matriz;
        this.lista = listas;
    }

    set setMatriz(matriz: Matriz){
        this.matriz = matriz;
    }

    setLista(matriz: Matriz): void{
        matriz.forEach( (array,i) => {
            array.forEach( (num,j) => {
                if (num != 0){
                    this.lista[i].appendFim(j)
                }
            })
        })
    }

    get_distancia(item1:number, item2:number){
        var distancia: number[] = this.busca_distancia(item1)
        if (distancia[item2]) return distancia[item2]
        else return "Não há caminho entre os dois vértices!"
    }

    busca_distancia(source: number) {
        var dist: number[] = []
        var passou: boolean[] = []
        var pilha: Pilha = new Pilha(this.lista[0].tam)

        for(let i = 0; i < this.num_vertices; i++){
            passou[i] = false
        }

        dist[source] = 0
        passou[source] = true
        pilha.inserir(source)

        while (!pilha.vazia()){
            let top: number | boolean = pilha.remover()

            if (typeof(top) == 'number'){    
                this.matriz[top].forEach((item,i) => {
                    if(!passou[i] && item != 0 && typeof(top) == 'number'){
                        dist[i] = dist[top] + 1
                        pilha.inserir(i)
                        passou[i] = true
                    }
                });
            }
        }   

        return dist
    }

    busca_profundidade(source: number){
        
    }

    print(): void {
        console.log(this.matriz)
        console.log(this.lista)
    }
}

function iniciar_grafo(): Grafo{
    let matriz: Matriz = JSON.parse(fs.readFileSync('./pcv4.json','utf8'));
    let graph: Grafo = new Grafo(matriz.length) 

    graph.matriz = matriz;
    graph.setLista(matriz) 

    return graph;
}

var graph: Grafo = iniciar_grafo()
console.log(graph)
console.log(graph.get_distancia(3,0))
console.log(graph.busca_profundidade(0))