class producto {
    getNombre() {
        return "Camiseta";
    }

    getPrecio() {
        return 100;
    }

    getDescripcion() {
        return "Lleva tu camisa a un precio economico";
    }
}

class productoInternacional {
    constructor(producto) {
        this.producto = producto;
    }
    getNombre() {
        return this.traducir();
    }

    traducir() {
        return this.producto.getNombre() + " English";
    }

    getPrecio() {
        return this.producto.getPrecio() + 30;
    }

    getDescripcion() {
        return this.producto.getDescripcion() + " Aprovecha!!!";
    }
}

let product = new producto();
prod = new productoInternacional(product);

console.log(prod.getNombre());
console.log(prod.getPrecio());
console.log(prod.getDescripcion());