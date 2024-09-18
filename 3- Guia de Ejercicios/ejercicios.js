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