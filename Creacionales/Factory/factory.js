//Funcion creadora de sitios
function creadorSitios() {
    //Crear Elemento es una funcion con datos (texto y tipoTexto)
    this.crearElemento = function(texto, tipoTexto) {
        let html;

        //Comparamos el tipo de Texto que nos envian
        if (tipoTexto === 'input') {
            html = new InputHTML(texto);
        } else if (tipoTexto == 'img') {
            html = new ImagenHTML(texto);
        } else if (tipoTexto === 'h1') {
            html = new HeadingHTML(texto);
        } else if (tipoTexto === 'p') {
            html = new ParrafoHTML(texto);
        }

        html.tipoTexto = tipoTexto;

        //Funcion para mostrar asignar atributos acorde al tipo de elemento
        html.mostrar = function() {
            const elemento = document.createElement(this.tipoTexto);
            if (tipoTexto === 'input') {
                elemento.setAttribute('placeholder', this.texto);
            } else if (tipoTexto == 'img') {
                elemento.setAtribute('src', this.texto);
            } else {
                elemento.appendChild(document.createTextNode(this.texto));
            }

            //Añadiendo a nuestro selectro app los elementos en la pagina HTML
            document.querySelector('#app').appendChild(elemento);
        }

        //Retornando el valor de la variable html
        return html;
    }
}


const HeadingHTML = function(texto) {
    this.texto = texto;
}
const InputHTML = function(texto) {
    this.texto = texto;
}
const ImagenHTML = function(texto) {
    this.texto = texto;
}
const ParrafoHTML = function(texto) {
    this.texto = texto;
}

const sitio = new creadorSitios();

//Array que almacena los elementos que se vayan creando
const elementosSitio = [];

elementosSitio.push(sitio.crearElemento('Patrones de Diseño', 'h1'));
elementosSitio.push(sitio.crearElemento('Factory', 'h1'));
elementosSitio.push(sitio.crearElemento('Aprendamos a usar el patron Factory', 'p'));
elementosSitio.push(sitio.crearElemento('Contacto', 'input'));

//Recorriendo arreglo  elementos sitios
elementosSitio.forEach(elemento => {
    elemento.mostrar();
});