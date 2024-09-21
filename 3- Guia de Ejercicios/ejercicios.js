/*EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/

function MayorDeEdad(){
    let edad;
    do{
        edad = prompt("Ingrese su edad")
    }while(edad <= 0);

    edad >= 18? alert("ERES MAYOR DE EDAD") : alert("ERES MENOR DE EDAD")
}

/* 
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente:  
• Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30% 
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

function calcularNotaFinal(){
    let examen;
    let tarea;
    let asistencia;
    let investigación;
    let notaFinal;

    examen = prompt("Ingrese nota de Examen:");
    do{
        if(examen < 0 || examen > 10)
            examen = prompt("Algun dato está incorrecto,\ncada nota debe de estar entre el rango de 0 a 10\nIntentelo nuevamente!!!\n\nIngrese nota de Examen:");
    }while(examen < 0 || examen > 10);

    tarea = prompt("Ingrese nota de Tarea:");
    do{
        if(tarea < 0 || tarea > 10)
            tarea = prompt("Algun dato está incorrecto,\ncada nota debe de estar entre el rango de 0 a 10\nIntentelo nuevamente!!!\n\nIngrese nota de Tarea:");
    }while(tarea < 0 || tarea > 10);
    
    asistencia = prompt("Ingrese nota de Asistencia:");
    do{
        if(asistencia < 0 || asistencia > 10)
            asistencia = prompt("Algun dato está incorrecto,\ncada nota debe de estar entre el rango de 0 a 10\nIntentelo nuevamente!!!\n\nIngrese nota de Asistencia:");
    }while(asistencia < 0 || asistencia > 10);

    investigación = prompt("Ingrese nota de Investigacion:");
    do{
        if(investigación < 0 || investigación > 10)
            investigación = prompt("Algun dato está incorrecto,\ncada nota debe de estar entre el rango de 0 a 10\nIntentelo nuevamente!!!\n\nIngrese nota de Investigacion:")

    }while(investigación < 0 || investigación > 10)

    examen = examen * 0.2;
    tarea = tarea * 0.4;
    asistencia = asistencia * 0.1;
    investigación = investigación * 0.3;

    notaFinal = examen + tarea + asistencia + investigación;
    alert("La nota final del alumnno es:\n " + notaFinal)

}

function calcularAumento(){
    let nombre;
    let salario;
    let categoria;
    let aumento = 0;
    const a = 0.15, b = 0.3, c = 0.1, d = 0.2; 

    //Asignacion de datos
    nombre = prompt("Nombre:");
    do{
        salario = parseFloat(prompt("Salario:"));
    }while(salario < 0)
    categoria = prompt("Categoria:");

    //Proceso
    if (categoria.toUpperCase() == "A"){
        aumento = parseFloat(salario + (salario * a));
        alert(nombre + " con salario actual de $" + salario + ", tiene un aumento del " + (a * 100) + "%\nNuevo salario: $" + aumento);
    }
    else{
        if (categoria.toUpperCase() == "B"){
            aumento = parseFloat(salario + (salario * b));
            alert(nombre + " con salario actual de $" + salario + ", tiene un aumento del " + (b * 100) + "%\nNuevo salario: $" + aumento);
    
        }
        else{
            if(categoria.toUpperCase() == "C"){
                aumento = parseFloat(salario + (salario * c));
                alert(nombre + " con salario actual de $" + salario + ", tiene un aumento del " + (c * 100) + "%\nNuevo salario: $" + aumento);
            }
            else {
                if(categoria.toUpperCase() == "D"){
                    aumento = parseFloat(salario + (salario * d));
                    alert(nombre + " con salario actual de $" + salario + ", tiene un aumento del " + (d * 100) + "%\nNuevo salario: $" + aumento);
                }
                else{
                    alert("Ingrese una categoria valida")
                }
            }
        }
    }
}

function numeroMayor(){
    let num1;
    let num2;

    num1 = parseInt(prompt("Ingrese el 1° numero"));
    num2 = parseInt(prompt("Ingrese el 2° numero"));

    if(num1 > num2)
        alert("El 1° nuemro: " + num1 + " es mayor")
    else{
        if(num2 > num1){
            alert("El 2° numero: " + num2 + " es mayor")
        }
        else{
            alert("Ambos numeros son igules")
        }
    }
}

function seleccionDeAuto(){
    let option;

    do{
        option = parseInt(prompt("-----AUTOS-----\n1.FORD FIESTA\n2.FORD FOCUS\n3.FORD SCAPE\n\nIngrese una ocpccion [1 - 3]"));
    }while(option < 1 || option > 3)
    
    switch(option){
        case 1: alert("El coche seleccionado es: FORD FIESTA\nDescuento: 5%");
        break;
        case 2: alert("El coche seleccionado es: FORD FOCUS\nDescuento: 10%");
        break;
        case 3: alert("El coche seleccionado es: FORD SCAPE\nDescuento: 20%");
        break
    }
}

function descuentoDeViaje(){
    let destino;
    let origen;

    origen = prompt("Origen del usuario:")
    destino = prompt("Escriba el destino al que quiere viajar desde la ciudad de Palma.\n1.La costa del sol\n2.Panchimalco\n3.Puerto el triunfo\n\nLugar de Origen:");
    destino = destino.toUpperCase();
    switch(destino){
        case "LA COSTA DEL SOL": 
            alert("Origen: " + origen + "\nDestino: " + destino + "\nDescuento: 5%");
            break;
        case "PANCHIMALCO": 
            alert("Origen: " + origen + "\nDestino: " + destino + "\nDescuento: 10%");
            break;
        case "PUERTO EL TRIENFO":  
            alert("Origen: " + origen + "\nDestino: " + destino + "\nDescuento: 20%");
            break
    }
}

function numeroIngreso(){
    let numeros = [];
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let pares = 0 ;

    for(let i = 0 ; i < 10 ; i++){
        numeros[i] = parseInt(prompt("Ingrese el " + (i + 1) + "° número" ));

        if(numeros[i] < 0)
            negativos++;
        else
            positivos++;

        if(numeros[i] % 15 == 0)
            multiplos15++;
        if(numeros[i] % 2 == 0)
            pares++;
    }

    alert("Numero negativos: " + negativos + "\nNumeros positivos: " + positivos + "\nMultiplos de 15: " + multiplos15 + "\nNumeros pares: " + pares)
}

function tablaMultiplicar(){
    let numero;

    numero = parseInt(prompt("Ingrese el nuemro de la tabla de multiplicas que desee"));

    alert(numero + " x 1 = " + (numero) + 
    "\n" + numero + " x 2 = " + (numero * 2) +
    "\n" + numero + " x 3 = " + (numero * 3) +
    "\n" + numero + " x 4 = " + (numero * 4) +
    "\n" + numero + " x 5 = " + (numero * 5) +
    "\n" + numero + " x 6 = " + (numero * 6) +
    "\n" + numero + " x 7 = " + (numero * 7) +
    "\n" + numero + " x 8 = " + (numero * 8) +
    "\n" + numero + " x 9 = " + (numero * 9) +
    "\n" + numero + " x 10 = " + (numero * 10))
}

function cambioDeTemperatura(){
    let celsius;
    let fahrenheit;

    celsius = parseFloat(prompt("Temperatura C°"))
    fahrenheit = (celsius * (9/5) + 32)

    if(fahrenheit >= 14 && fahrenheit <= 32)
        alert("Temperatura baja")
    if(fahrenheit > 32 && fahrenheit <= 68)
        alert("Temperatura adecuada")
    if(fahrenheit > 68 && fahrenheit <= 96)
        alert("Temperatura Alta")
    if(fahrenheit < 14 || fahrenheit > 96)
        alert("Temperatura desconocida")
}

function edades(){
    let edadesManiana = [];
    let edadesTarde = [];
    let edadesNoche = [];
    let suma = [0,0,0];
    let promedio = [0,0,0];

    for(let i = 0 ; i < 5 ; i++){
        edadesManiana[i] = parseInt(prompt("EDAD POR LA MAÑANA\nIngrese la " + (i+1) + "° edad:"));
        suma[0] += edadesManiana[i];
    }
    for(let i = 0 ; i < 6 ; i++){
        edadesTarde[i] = parseInt(prompt("EDAD POR LA TARDE\nIngrese la " + (i+1) + "° edad:"));
        suma[1] += edadesTarde[i]
    }
    for(let i = 0 ; i < 11 ; i++){
        edadesNoche[i] = parseInt(prompt("EDAD POR LA NOCHE\nIngrese la " + (i+1) + "° edad:"));
        suma[2] += edadesNoche[i];
    }

    promedio = [suma[0] / 5 , suma[1] / 6 , suma[2] / 11]
    
    alert("Promedio de Edades por la Mañana: " + promedio[0] + "\nPromedio de Edades por la Tarde: " + promedio[1] + "\nPromedio de Edades por la Noche: " + promedio[2]);
    
    if(promedio[0] > promedio[1] && promedio[0] > promedio[2])
        alert("El mayor promedio de edades mayores lo tiene el grupo por la MAÑANA")
    else{
        if(promedio[1] > promedio[0] && promedio[1] > promedio[2])
            alert("El mayor promedio de edades mayores lo tiene el grupo por la TARDE")
        else{
            if(promedio[2] > promedio[0] && promedio[2] > promedio[1])
                alert("El mayor promedio de edades mayores lo tiene el grupo por la NOCHE")
        }
    }
}