const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(producto, precio) {
        console.log(`Tenemos el siguiente articulo ${producto}, iniciamos en ${precio}`);
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${comprador}`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instanciando
const Manuel = new Comprador('Manuel');
const Alex = new Comprador('Alexander');
const Samuel = new Comprador('Samuel');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(Manuel);
subasta.registrar(Alex);
subasta.registrar(Samuel);

vendedor.oferta('Reloj de Oro', 3000);
Manuel.oferta(3500, Manuel);
Samuel.oferta(3700, Samuel);
Alex.oferta(6000, Alex);
vendedor.vendido(Alex.nombre);