type PontNo = No | null;
type content = number;

class No{
    prox: PontNo;
    ant: PontNo;
    value: content;

    constructor(value: content){
        this.prox = null;
        this.ant = null;
        this.value = value;
    }
}

class Lista{
    ini: PontNo;
    fim: PontNo;
    tam: number;

    constructor(){
        this.tam = 0;
        this.ini = null;
        this.fim = null
    }

    percorre_lista(): content[]{
        const lista_array: content[] = []
        var aux: PontNo = this.ini

        while(aux != null){
            lista_array.push(aux.value) 
            aux = aux.prox
        }

        return lista_array
    }

    append(pos: number, data: content): void{
        if(pos > 0 && pos <= this.tam+1){
            var novo: No = new No(data);

            if(pos == 1){
                novo.prox = this.ini;
                this.ini == null ? {} : this.ini.ant = novo;
                this.ini = novo;

                if(this.tam == 0){
                    this.fim = novo;
                }
            }
            else if(pos == this.tam+1){
                this.fim == null ? {} :this.fim.prox = novo; 
                novo.ant = this.fim;

                this.fim = novo;
            }
            else{
                var aux: PontNo = this.ini;
                for(let i = 0; i < pos-1;i++){
                    if (aux == null) break; 
                    aux = aux.prox;
                }
                if(aux != null && aux.ant != null){
                    novo.prox = aux;
                    novo.ant = aux.ant; 
    
                    aux.ant.prox = novo;
                    aux.ant = novo;
                }
            }
            this.tam++;
        }
    }

    appendIni(data: content): void{
        var novo: No = new No(data);
        novo.prox = this.ini;
        this.ini == null ? {} : this.ini.ant = novo;
        this.ini = novo;

        if(this.tam == 0){
            this.fim = novo;
        }

        this.tam++;
    }

    appendFim(data: content): void{
        var novo: No = new No(data);

        this.fim == null ? {} :this.fim.prox = novo; 
        novo.ant = this.fim;
        this.fim = novo;

        if(this.tam == 0){
            this.ini = novo;
        }
        
        this.tam++;
    }

    remove(pos: number): void {
        if(this.tam >= 0 && pos > 0 && pos <= this.tam){
            
            if(pos == 1){
                if(this.tam == 1){
                    this.fim = null
                    this.ini = null
                }else if(this.ini != null && this.ini.prox != null){
                    this.ini = this.ini.prox;
                    this.ini.ant = null;
                }
            }else if(pos == this.tam){
                if(this.fim != null && this.fim.ant != null){
                    this.fim = this.fim.ant;
                    this.fim.prox = null;
                }
            }else{
                var aux: PontNo = this.ini;
                
                for(let i = 0; i < pos-1; i++){
                    if(aux != null){
                        aux = aux.prox;
                    }
                }
                
                if (aux != null && aux.prox != null && aux.ant != null){
                    aux.prox.ant = aux.ant 
                    aux.ant.prox = aux.prox
                }
            }

            this.tam--;
        } 
    }

    print(): void {
        var aux: PontNo = this.ini;
        for (let i = 0; i < this.tam; i++) {
            if(aux != null){
                console.log(aux.value)
                aux = aux.prox;
            }
        }
    }
}

export default  "None";
export { No, Lista, content, PontNo}