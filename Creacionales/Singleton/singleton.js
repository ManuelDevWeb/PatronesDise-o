//Define la creacion de un objeto que solo tiene una instancia
const personas = {
    //Todas las personas
    listaPersonas: [],
    //Obtener persona
    get: function(id) {
        console.log(id);
        return this.listaPersonas[id];
    },
    //Crear persona
    crear: function(datos) {
        console.log(datos);
        this.listaPersonas.push(datos);
    },
    //Listado de todas las personas
    listado: function() {
        return this.listaPersonas;
    }
}

const infoPersona1 = {
    nombre: 'Manuel',
    edad: 20
}
const infoPersona2 = {
    nombre: 'Alexander',
    edad: 40
}

personas.crear(infoPersona1);
personas.crear(infoPersona2);

const listado = personas.listado();
console.log(listado);

const persona = personas.get(1);
console.log(persona);