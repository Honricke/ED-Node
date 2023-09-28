"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
var Pilha = /** @class */ (function () {
    function Pilha(tamMax) {
        this.dados = [];
        this.tamMax = tamMax;
        this.tamAtual = 0;
    }
    Pilha.prototype.vazia = function () {
        if (this.tamAtual == 0)
            return true;
        else
            return false;
    };
    Pilha.prototype.get = function () {
        if (this.tamAtual > 0) {
            var topo = this.dados[this.tamAtual - 1];
            return topo;
        }
        else
            return false;
    };
    Pilha.prototype.inserir = function (dado) {
        if (this.tamAtual < this.tamMax) {
            this.dados[this.tamAtual] = dado;
            this.tamAtual += 1;
        }
    };
    Pilha.prototype.remover = function () {
        if (!this.vazia()) {
            var index = this.tamAtual - 1;
            var dado = this.dados[index];
            this.dados.pop();
            this.tamAtual -= 1;
            return dado;
        }
        else
            return false;
    };
    return Pilha;
}());
exports.Pilha = Pilha;
