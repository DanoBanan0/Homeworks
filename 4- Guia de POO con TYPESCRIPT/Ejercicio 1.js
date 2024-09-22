var Cabecera = /** @class */ (function () {
    //Metodo para obtener titulo, color y fuente
    function Cabecera(title, color, font) {
        this.titulo = title;
        this.color = color;
        this.fuente = font;
    }
    //Método que indique como desea que aparezca el título si centrado, derecha o izquierda 
    Cabecera.prototype.EstiloDePagina = function () {
        var opcion;
        opcion = prompt("Ingrese en que posicion quiere el titulo:\n\n1-Izquierda\n2-Centrado\n3-Derecha");
        switch (opcion) {
            case 1:
                return "Titulo a la izquierda";
                break;
            case 2:
                return "Titulo centrado";
                break;
            case 3:
                return "Titulo a la derecha";
                break;
            default:
                "Ingrese una opccion valida";
                break;
        }
    };
    return Cabecera;
}());
