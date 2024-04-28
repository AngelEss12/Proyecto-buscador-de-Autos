// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

// El metodo getfullyear sirva para traer el año actual
const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transimion: '',
    color: ''
};

console.log(max, min);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles a cargar

    // Llena las opciones de año
    llenarSelect();
});

// Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda);
    
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda);
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda);
});

transmision.addEventListener('change', e => {
    datosBusqueda.transimion = e.target.value;
    console.log(datosBusqueda);
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});

// Funciones
function mostrarAutos() {
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision}
        `;

        // Insertar el html
        resultado.appendChild(autoHTML);
    });
};

// Genera los años del select
function llenarSelect() {
    for(let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agregamos las opciones
    }
};

// Filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log(resultado);
};

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
}