import { state } from './config.js'
import { renderJobs } from './render.js';

const buttonTechnology = document.querySelector('#button-technology')
const filterModalidad = document.querySelector('#filter-modalidad')
const filterNivel = document.querySelector('#filter-nivel')
const filterTechnology = document.querySelector('#filter-technology')
const applyTechnologyFilter = document.querySelector('#apply-technology-filter')
const mensaje = document.querySelector('#filter-selected-value')
const empleosSearchInput = document.querySelector('#empleos-search-input')

function filtrar() {
  if (!state.allJobs || state.allJobs.length === 0) return;

  const selectedValueModalidad = filterModalidad.value;
  const selectedValueNivel = filterNivel.value;
  const searchTerm = empleosSearchInput.value.toLowerCase();
  
  const radioChecked = document.querySelector('input[name="technology-op"]:checked');
  const filterMode = radioChecked ? radioChecked.value : 'any';

  state.filteredJobs = state.allJobs.filter(job => {
    // 1. Filtro por Texto (Título y Descripción)
    const matchTitle = job.titulo.toLowerCase().includes(searchTerm) || 
                       job.descripcion.toLowerCase().includes(searchTerm);
    
    // 2. Filtro por Modalidad y Nivel
    const matchModalidad = selectedValueModalidad === '' || job.data.modalidad === selectedValueModalidad;
    const matchNivel = selectedValueNivel === '' || job.data.nivel === selectedValueNivel;
    
    // 3. Filtro por Tecnologías (Normalización de tipos)
    const rawTech = job.data.technology;
    let jobTechs = [];

    if (Array.isArray(rawTech)) {
      jobTechs = rawTech.map(t => String(t).toLowerCase());
    } else if (typeof rawTech === 'string') {
      jobTechs = rawTech.split(',').map(t => t.trim().toLowerCase());
    }

    const checkedTechs = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    
    let matchTech = true;
    if (checkedTechs.length > 0) {
      if (filterMode === 'any') {
        matchTech = checkedTechs.some(tech => jobTechs.includes(tech));
      } else {
        matchTech = checkedTechs.every(tech => jobTechs.includes(tech));
      }
    }

    return matchTitle && matchModalidad && matchNivel && matchTech;
  });

  state.currentPage = 1; 
  if (mensaje) {
    mensaje.textContent = `Mostrando ${state.filteredJobs.length} resultados`;
  }
  renderJobs(); 
}

// --- Event Listeners ---

// IMPORTANTE: El input de texto ahora llama a la misma función filtrar
empleosSearchInput.addEventListener('input', filtrar)

filterModalidad.addEventListener('change', filtrar)
filterNivel.addEventListener('change', filtrar)

buttonTechnology.addEventListener('click', () => {
  filterTechnology.classList.toggle('is-hidden')
})

applyTechnologyFilter.addEventListener('click', (e) => {
  e.preventDefault();
  filtrar();
  filterTechnology.classList.add('is-hidden')
});

document.addEventListener('click', (e) => {
  if (!filterTechnology.contains(e.target) && !buttonTechnology.contains(e.target)) {
    filterTechnology.classList.add('is-hidden');
  }
});

