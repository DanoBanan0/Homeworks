var Calculadora = /** @class */ (function () {
    function Calculadora(num1Param, num2Param) {
        this.num1 = num1Param;
        this.num2 = num2Param;
    }
    Calculadora.prototype.Suma = function () {
        return this.num1 + this.num2;
    };
    Calculadora.prototype.Resta = function () {
        return this.num1 - this.num2;
    };
    Calculadora.prototype.Multiplicacion = function () {
        return this.num1 * this.num2;
    };
    Calculadora.prototype.Divicion = function () {
        return this.num1 / this.num2;
    };
    Calculadora.prototype.Potencia = function () {
        return Math.pow(this.num1, this.num2);
    };
    Calculadora.prototype.Factorial = function () {
        var resultado = 1;
        for (var i = 1; i <= this.num1; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
