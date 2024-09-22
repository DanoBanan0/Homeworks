class Calculadora { 
    num1:number;
    num2:number;

    constructor(num1Param:number, num2Param:number){
        this.num1 = num1Param;
        this.num2 = num2Param;
    }

    Suma(){
        return this.num1 + this.num2;
    }
    Resta(){
        return this.num1 - this.num2;
    }
    Multiplicacion(){
        return this.num1 * this.num2;
    }
    Divicion(){
        return this.num1 / this.num2;
    }
    Potencia(){
        return Math.pow(this.num1,this.num2);
    }
    Factorial():number{
        let resultado = 1;

        for(let i = 1 ; i <= this.num1 ; i++){
            resultado *= i;
        }

        return resultado;
    }
}