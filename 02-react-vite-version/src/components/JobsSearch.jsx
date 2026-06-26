export default function JobsSearch() {
    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico.</p>

            <form id="empleos-search-form" role="search">
                <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>

                    <input name="search" id="empleos-search-input" required type="text"
                        placeholder="Buscar trabajos, empresas o habilidades" />
                </div>

                <div className="search-filters">
                    <button type="button" id="button-technology" className="flex">
                        <div id="button-technology-text">
                            <span>Tecnologías</span>
                        </div>
                        <span>▼</span>
                    </button>

                    <div id="filter-technology" className="filter-technology is-hidden">
                        <div className="filter-technology-radio">
                            <div className="filter-technology-radio-option">
                                <input type="radio" name="technology-op" id="filter-technology-any" value="any" defaultChecked />
                                <label htmlFor="filter-technology-any">Al menos una tecnología</label>
                            </div>
                            <div className="filter-technology-radio-option">
                                <input type="radio" name="technology-op" id="filter-technology-all" value="all" />
                                <label htmlFor="filter-technology-all">Todas las tecnologías</label>
                            </div>
                        </div>
                        <div className="filter-technology-options">
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-js" value="javascript" />
                                <label htmlFor="tech-js">JavaScript</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-py" value="python" />
                                <label htmlFor="tech-py">Python</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-react" value="react" />
                                <label htmlFor="tech-react">React</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-node" value="node" />
                                <label htmlFor="tech-node">Node.js</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-java" value="java" />
                                <label htmlFor="tech-java">Java</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-csharp" value="csharp" />
                                <label htmlFor="tech-csharp">C#</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-c" value="c" />
                                <label htmlFor="tech-c">C</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-cplusplus" value="c++" />
                                <label htmlFor="tech-cplusplus">C++</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-ruby" value="ruby" />
                                <label htmlFor="tech-ruby">Ruby</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="tech-php" value="php" />
                                <label htmlFor="tech-php">PHP</label>
                            </div>
                            <div className="filter-technology-option">
                                <input type="checkbox" name="technology" id="mobile" value="mobile" />
                                <label htmlFor="mobile">Mobile</label>
                            </div>
                        </div>
                        <button id="apply-technology-filter">Filtrar</button>
                    </div>

                    <select name="location" id="filter-modalidad">
                        <option value="">Ubicación</option>
                        <option value="remoto">Remoto</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                        <option value="barcelona">Barcelona</option>
                    </select>

                    <select name="experience-level" id="filter-nivel">
                        <option value="">Nivel de experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>
                </div>
            </form>

            <span id="filter-selected-value"></span>
        </section>
    )
}