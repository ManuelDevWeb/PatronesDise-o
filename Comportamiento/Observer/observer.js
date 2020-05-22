//Suscriptor-Publicador
let observer = {
    obtenerOfertas: function(callback) {
        if (typeof callback === "function") {
            this.suscribers[this.suscribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback) {
        for (let i = 0; i < this.suscribers.length; i++) {
            if (this.suscribers[i] == callback) {
                delete this.suscribers[i];
            }
        }
    },
    publicarOferta: function(oferta) {
        for (let i = 0; i < this.suscribers.length; i++) {
            if (typeof this.suscribers[i] === "function") {
                this.suscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }
}

//Vendedores de ofertas
const mercadoLibre = {
    nuevoProducto: function() {
        const producto = 'Nevera LG';
        this.publicarOferta(producto);
    }
}

const olx = {
    nuevaOferta: function() {
        const oferta = 'Celular Xiaomi 30% descuento';
        this.publicarOferta(oferta);
    }
}

//Creando los publicadores de ofertas
observer.crear(mercadoLibre);
observer.crear(olx);

//Personas
const Manuel = {
    publicidad: function(oferta) {
        console.log("Manuel dice: Me interesa la oferta de " + oferta);
    }
}

const Valencia = {
    comprar: function(oferta) {
        console.log("Valencia dice: Deseo comprar el producto " + oferta);
    }
}

olx.obtenerOfertas(Manuel.publicidad);
olx.obtenerOfertas(Valencia.comprar);
olx.nuevaOferta();
olx.cancelarOfertas(Valencia.comprar);
olx.nuevaOferta();

mercadoLibre.obtenerOfertas(Valencia.comprar)
mercadoLibre.nuevoProducto();