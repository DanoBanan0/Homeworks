var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.laCancion = function () {
        console.log("Titulo: " + this.titulo + "\nGenero: " + this.genero + "\nAutor: " + this.autor);
    };
    return Cancion;
}());
