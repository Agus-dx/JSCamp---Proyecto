import Header from './components/Header'
import Footer from './components/Footer'
import JobsSearch from './components/JobsSearch'
import JobsResults from './components/JobsResults'
import JobCard from './components/JobCard'
function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="jobs-container">
          <h2>Trabajos Disponibles (3)</h2>

          <div className="jobs-grid">
            <JobCard
              job={{
                title: 'Frontend Developer',
                company: 'TechCorp',
                location: 'Madrid, España',
                salary: '€45,000 - €60,000',
                description: 'Buscamos desarrollador frontend con experiencia en React.',
                tags: ['React', 'TypeScript', 'CSS'],
              }}
              isRemote={false}
              isFeatured={true}
              isNew={true}
            />

            <JobCard
              job={{
                title: 'Backend Developer',
                company: 'DataStack',
                location: 'Barcelona, España',
                salary: '€50,000 - €70,000',
                description: 'Desarrollador backend para Node.js y bases de datos.',
                tags: ['Node.js', 'PostgreSQL', 'API'],
              }}
              isRemote={true}
              isFeatured={false}
              isNew={false}
            />

            <JobCard
              job={{
                title: 'Full Stack Developer',
                company: 'StartupX',
                location: 'Remoto',
                salary: '€40,000 - €55,000',
                description: 'Desarrollador full stack para startup en crecimiento.',
                tags: ['React', 'Node.js', 'MongoDB'],
              }}
              isRemote={true}
              isFeatured={false}
              isNew={true}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
