abstract class Persona {
    nombre:string;
    apellido:string;
    direccion:string;
    telefono:string;
    edad:number;

    constructor(nombreParam:string,apellidoParam:string,direccionParam:string,telefonoParam:string,edadParam:number){
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    mayorDeEdad(){
        if(this.edad >= 18 )
            console.log("Es mayor de edad.");
        else
            console.log("Es menor de edad.");                
    }

    abstract datosPersona()
}

class Empleado extends Persona {
    sueldo:number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number, sueldoParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
        this.sueldo = sueldoParam;
    }

    cargarSueldo(sueldoParam: number){
        this.sueldo = sueldoParam;
    }

    imprimirSueldo(){
        console.log("Sueldo: $" + this.sueldo);
    }

    datosPersona(){
        console.log("Nombre: " + this.nombre + " " + this.apellido + "\nDirección: " + this.direccion + "\nTelefono: " + this.telefono + "\nEdad: " + this.edad)

    }
}

let empleado = new Empleado("Daniel", "Villatoro", "Prados de Venecia 2", "123456789", 26, 1500);

empleado.datosPersona();
empleado.mayorDeEdad();
empleado.imprimirSueldo(); 