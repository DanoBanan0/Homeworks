var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.mayorDeEdad = function () {
        if (this.edad >= 18)
            console.log("Es mayor de edad.");
        else
            console.log("Es menor de edad.");
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo: $" + this.sueldo);
    };
    Empleado.prototype.datosPersona = function () {
        console.log("Nombre: " + this.nombre + " " + this.apellido + "\nDirección: " + this.direccion + "\nTelefono: " + this.telefono + "\nEdad: " + this.edad);
    };
    return Empleado;
}(Persona));
var empleado = new Empleado("Daniel", "Villatoro", "Prados de Venecia 2", "123456789", 26, 1500);
empleado.datosPersona();
empleado.mayorDeEdad();
empleado.imprimirSueldo();
