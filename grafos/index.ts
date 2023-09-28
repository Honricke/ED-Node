// @ts-nocheck
import { Lista, PontNo } from "../lista_encadeada_dupla"
import { Pilha } from "../pilha_vetor"

type Matriz = Array<Array<number>>
type Cores = "Branco" | "Amarelo" | "Vermelho"

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

            this.matriz[ver].forEach((dist_atual,i) => {
                if(dist[i] == -1 && dist_atual != 0){
                    dist[i] = dist[ver] + 1
                    from[i] = ver
                    pilha.inserir(i)
                }
            }) 
        }

        return {
                'distancia': dist,
                'origem': from
            }
    }

    //Recursiva
    busca_profundidade(source: number) {
        function visitV(grafo: Grafo,ver: number, cor: Cores[]){
            console.log(`Vértice: ${ver}`)
            cor[ver] = "Amarelo"

            var aux: PontNo = grafo.lista[ver].ini
            for(let i = 0; i < grafo.lista[ver].tam; i++){
                if(cor[aux.value] == "Branco"){
                    visitV(grafo,aux.value,cor)
                }       
                aux = aux.prox
            }

            cor[ver] = "Vermelho"
        }

        const cor: Cores[] = []

        for(let i = 0; i < this.num_vertices; i++){
            cor[i] = "Branco"
        }        

        cor[source] = "Amarelo"

        var aux: PontNo = this.lista[source].ini  
        for(let i = 0; i < this.lista[source].tam; i++){
            if (cor[aux?.value] == "Branco") {
                visitV(this, aux.value, cor);
            }
            aux = aux.prox
        }
    }

    //Pilha
    busca_profundidade2(source: number){
        const cor: Cores[] = []
        const pilha: Pilha = new Pilha(this.num_vertices)

        for(let i = 0; i < this.num_vertices; i++){
            cor[i] = "Branco"
        }        

        pilha.inserir(source)

        while(!pilha.vazia()){
            const ver = pilha.remover() 

            console.log(`Vértice: ${ver}`)
            
            var aux: PontNo = this.lista[ver].ini
            for(let i = 0; i < this.lista[ver].tam; i++){
                
                if(aux && cor[aux.value] == "Branco"){
                    cor[aux.value] = "Amarelo"
                    pilha.inserir(aux.value)
                }       
                //@ts-ignore
                aux = aux.prox
            }

            cor[ver] = "Vermelho"
        }
    }

    print(): void {
        console.log(this.matriz)
        console.log(this.lista)
    }
}

export { Grafo }