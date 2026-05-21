import { state } from './config.js'

state.count++ 

console.log(state)

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filter.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
})

const empleosSearchInput = document.querySelector('#empleos-search-input')
empleosSearchInput.addEventListener('input', function () {

  const searchTerm = empleosSearchInput.value.toLowerCase()
  const jobs = document.querySelectorAll('.job-listing-card')
  let jobsShown = 0;

  jobs.forEach(job => {
    const title = job.querySelector('h3').textContent.toLowerCase()
    const isShown = title.includes(searchTerm)
    if(isShown === false) {
      job.classList.add('is-hidden');
      
    } else{
      job.classList.remove('is-hidden');
      jobsShown++;
    }
    mensaje.textContent = `Mostrando ${jobsShown} de ${jobs.length} empleos`;
  })
})