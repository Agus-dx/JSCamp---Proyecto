// fetch-data.js
import { state } from './config.js';
import { renderJobs } from './render.js'; // Crearemos este archivo

fetch("./data.json")
  .then((response) => response.json())
  .then((jobs) => {
    state.allJobs = jobs;
    state.filteredJobs = jobs; // Al inicio, filtrados son todos
    renderJobs(); 
  });

const container = document.querySelector('.jobs-listings')