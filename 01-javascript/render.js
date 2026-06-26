// render.js
import { state } from './config.js';

const container = document.querySelector('.jobs-listings');
const paginationNav = document.querySelector('.pagination');

export function renderJobs() {
  container.innerHTML = ''; // Limpiamos contenedor
  
  const start = (state.currentPage - 1) * state.resultsPerPage;
  const end = start + state.resultsPerPage;
  
  // Cortamos el array según la página
  const jobsToDisplay = state.filteredJobs.slice(start, end);

  jobsToDisplay.forEach(job => {
    const article = document.createElement('article');
    article.className = 'job-listing-card';
    article.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`;
    container.appendChild(article);
  });

  renderPagination();
}

function renderPagination() {
  paginationNav.innerHTML = '';
  const totalPages = Math.ceil(state.filteredJobs.length / state.resultsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    if (i === state.currentPage) pageLink.classList.add('is-active');

    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      state.currentPage = i;
      renderJobs();
      window.scrollTo(0, 0); // Scroll arriba al cambiar página
    });

    paginationNav.appendChild(pageLink);
  }
}