//             Variables
const resultado = document.querySelector('#resultado');//Contenedor de Resultados
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');



const max = new Date().getFullYear();  
const min = max - 10;

//Objeto con los parámetros de busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}




//                                     EVENTOS

document.addEventListener('DOMContentLoaded', () => {

  mostrarAutos(autos);
  llenarSelect();

})

marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value
  filtrarAuto();
})
year.addEventListener('change', e => {
  datosBusqueda.year = parseInt(e.target.value); 
  filtrarAuto();
})
minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value
  filtrarAuto();
})
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
  filtrarAuto();
})
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAuto();
})
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
  filtrarAuto();
})
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  filtrarAuto();  
})




//                                    FUNCIONES

//FUNCION PARA MOSTRAR LOS AUTOS
function mostrarAutos(autos) {

 limpiarHTML(); //Elimina el HTML previo

  autos.forEach(auto => {

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio: ${precio} - Color: ${color}`;

    // Insertar en el HTML
    resultado.appendChild(autoHTML)
  })
}

//FUNCIÓN PARA LIMPIAR EL HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

}





//función para mostrar los años de los autos
function llenarSelect() {
  for (let i = max; i >= min; i--) {

    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

//                      FUNCIÓN PARA FILTRAR LA BUSQUEDA

//Filtrar x auto
function filtrarAuto() {
  const resultado = autos.filter(filtrarmarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  console.log(resultado);
  
  mostrarAutos(resultado);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado(); 
  }
}

//Función de no resultado
function noResultado() {
  limpiarHTML();
  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta','error');
  noResultado.textContent = 'No hay resultados, intentar con otras características';
  resultado.appendChild(noResultado);
}


// Filtrar x marca
function filtrarmarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

// Filtrar x año
function filtrarYear(auto) {
  const { year } = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

//Filtrar por precio mínimo
function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >=minimo;
  }
  return auto;
}

//Filtrar por precio máximo
function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}

//Filtrar por puertas
function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}

//Filtrar x transmision
function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

//Filtrar por color
function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}