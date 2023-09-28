"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = exports.No = void 0;
var No = /** @class */ (function () {
    function No(value) {
        this.prox = null;
        this.ant = null;
        this.value = value;
    }
    return No;
}());
exports.No = No;
var Lista = /** @class */ (function () {
    function Lista() {
        this.tam = 0;
        this.ini = null;
        this.fim = null;
    }
    Lista.prototype.percorre_lista = function () {
        var lista_array = [];
        var aux = this.ini;
        while (aux != null) {
            lista_array.push(aux.value);
            aux = aux.prox;
        }
        return lista_array;
    };
    Lista.prototype.append = function (pos, data) {
        if (pos > 0 && pos <= this.tam + 1) {
            var novo = new No(data);
            if (pos == 1) {
                novo.prox = this.ini;
                this.ini == null ? {} : this.ini.ant = novo;
                this.ini = novo;
                if (this.tam == 0) {
                    this.fim = novo;
                }
            }
            else if (pos == this.tam + 1) {
                this.fim == null ? {} : this.fim.prox = novo;
                novo.ant = this.fim;
                this.fim = novo;
            }
            else {
                var aux = this.ini;
                for (var i = 0; i < pos - 1; i++) {
                    if (aux == null)
                        break;
                    aux = aux.prox;
                }
                if (aux != null && aux.ant != null) {
                    novo.prox = aux;
                    novo.ant = aux.ant;
                    aux.ant.prox = novo;
                    aux.ant = novo;
                }
            }
            this.tam++;
        }
    };
    Lista.prototype.appendIni = function (data) {
        var novo = new No(data);
        novo.prox = this.ini;
        this.ini == null ? {} : this.ini.ant = novo;
        this.ini = novo;
        if (this.tam == 0) {
            this.fim = novo;
        }
        this.tam++;
    };
    Lista.prototype.appendFim = function (data) {
        var novo = new No(data);
        this.fim == null ? {} : this.fim.prox = novo;
        novo.ant = this.fim;
        this.fim = novo;
        if (this.tam == 0) {
            this.ini = novo;
        }
        this.tam++;
    };
    Lista.prototype.remove = function (pos) {
        if (this.tam >= 0 && pos > 0 && pos <= this.tam) {
            if (pos == 1) {
                if (this.tam == 1) {
                    this.fim = null;
                    this.ini = null;
                }
                else if (this.ini != null && this.ini.prox != null) {
                    this.ini = this.ini.prox;
                    this.ini.ant = null;
                }
            }
            else if (pos == this.tam) {
                if (this.fim != null && this.fim.ant != null) {
                    this.fim = this.fim.ant;
                    this.fim.prox = null;
                }
            }
            else {
                var aux = this.ini;
                for (var i = 0; i < pos - 1; i++) {
                    if (aux != null) {
                        aux = aux.prox;
                    }
                }
                if (aux != null && aux.prox != null && aux.ant != null) {
                    aux.prox.ant = aux.ant;
                    aux.ant.prox = aux.prox;
                }
            }
            this.tam--;
        }
    };
    Lista.prototype.print = function () {
        var aux = this.ini;
        for (var i = 0; i < this.tam; i++) {
            if (aux != null) {
                console.log(aux.value);
                aux = aux.prox;
            }
        }
    };
    return Lista;
}());
exports.Lista = Lista;
exports.default = "None";
