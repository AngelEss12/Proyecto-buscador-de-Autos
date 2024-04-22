// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

// El metodo getfullyear sirva para traer el año actual
const max = new Date().getFullYear();
const min = max - 10;

console.log(max, min);

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los automoviles a cargar

    // Llena las opciones de año
    llenarSelect();
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
}

// Genera los años del select
function llenarSelect() {
    for(let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agregamos las opciones
    }
}