import './App.css';
import fotoPerfil from './assets/cv1.jpg';

function App() {
  // Datos de ejemplo, puedes personalizar tu información y proyectos aquí
  const proyectos = [
    {
      titulo: "ApiRest",
      descripcion: "ApiRest para la gestion de un tienda de Pc, con spring boot, JWT y MySQL.",
      enlace: "https://github.com/stanleeeys/ApiRest-J-RAS-Cumputer"
    },
    {
      titulo: "Frontend",
      descripcion: "Frontend para la gestion de un tienda de Pc, con Angular.",
      enlace: "https://github.com/stanleeeys/J-RAS-computer"
    },
    {
      titulo: "MongoDB",
      descripcion: "Gestion de empleados.",
      enlace: "https://github.com/stanleeeys/proyectoMongo"
    }
  ];

  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <img src={fotoPerfil} alt="Foto de perfil" className="foto-perfil" />
        <h1>Stanley Saul Serrano Oliva</h1>
        <p className="portfolio-desc">Egresado de ingenieria en sistemas y computación,
           Desarrollador web apasionado por la tecnología y la creatividad.</p>
        <p className="email">so0152032019@unab.edu.sv</p>
        <div className="social-row">
          <a href="https://github.com/stanleeeys" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/stanley-serrano-28b620279/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.368-1.849 3.599 0 4.264 2.368 4.264 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z"/></svg>
          </a>
        </div>
      </header>
      <section className="portfolio-experience">
        <h2>Experiencia</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Desarrollador Backend</h3>
            <span className="empresa">J-RAS Computer</span>
            <p>Implementación de API Rest segura con Spring Boot, JWT y MySQL para la gestión de inventario y ventas.</p>
          </div>
          <div className="experience-card">
            <h3>Desarrollador Frontend</h3>
            <span className="empresa">J-RAS Computer</span>
            <p>Desarrollo de aplicación web responsiva en Angular para administración de productos y clientes.</p>
          </div>
          <div className="experience-card">
            <h3>Desarrollador de Base de Datos</h3>
            <span className="empresa">Proyecto Independiente</span>
            <p>Diseño y gestión de base de datos MongoDB para el control de empleados y reportes.</p>
          </div>
        </div>
      </section>
      <section className="portfolio-projects">
        <h2>Proyectos personales</h2>
        <div className="projects-grid">
          {proyectos.map((proy, idx) => (
            <div className="project-card" key={idx}>
              <h3>{proy.titulo}</h3>
              <p>{proy.descripcion}</p>
              <a href={proy.enlace} target="_blank" rel="noopener noreferrer">Ver más</a>
            </div>
          ))}
        </div>
      </section>
      <footer className="portfolio-footer">
        <h2>Contacto</h2>
        <div className="social-links">
          <a href="https://github.com/stanleeeys" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/stanley-serrano-28b620279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App
