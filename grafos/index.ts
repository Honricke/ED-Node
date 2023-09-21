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

    print(): void {
        console.log(this.matriz)
        console.log(this.lista)
    }
}

function start(){
    var matriz: Matriz = JSON.parse(fs.readFileSync('./pcv4.json','utf8'));
    var graph: Grafo = new Grafo(matriz.length) 
    graph.matriz = matriz;

    return graph;
}

start()