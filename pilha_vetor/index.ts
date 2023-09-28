type content = number

class Pilha{
    dados: content[];
    tamMax: number;
    tamAtual: number;
    constructor(tamMax: number){
        this.dados = []
        this.tamMax = tamMax
        this.tamAtual = 0
    }

    vazia(){
        if (this.tamAtual == 0) return true;
        else return false;
    }

    get(){
        if (this.tamAtual > 0){
            let topo: content = this.dados[this.tamAtual-1]
            return topo;
        }else return false
    }   

    inserir(dado: content){
        if(this.tamAtual < this.tamMax){
            this.dados[this.tamAtual] = dado  
            this.tamAtual+=1
        }
    }

    remover(){
        if(!this.vazia()){
            let index: number = this.tamAtual-1
            let dado: content = this.dados[index]
            this.tamAtual-=1
            return dado
        }else return false
    }
}

export { Pilha }