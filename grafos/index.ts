import { Lista } from "../lista_encadeada_dupla"
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