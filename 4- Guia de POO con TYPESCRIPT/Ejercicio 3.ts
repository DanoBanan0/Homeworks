class Cancion {
    titulo:string;
    genero:string;
    private autor:string;

    constructor(tituloParam:string,generoParam:string){
        this.titulo = tituloParam;
        this.genero = generoParam;
    }

    setAutor(autorParam:string){
        this.autor = autorParam;
    }   
    getAutor(){
        return this.autor;
    }

    laCancion(){
        console.log("Titulo: " + this.titulo + "\nGenero: " + this.genero + "\nAutor: " + this.autor);
        
    }
}