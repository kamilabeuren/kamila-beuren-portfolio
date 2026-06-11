import foto from '../assets/foto-principal.jpg'

function About() {
  return (
    <section className="about">

      <img
        src={foto}
        alt="Kamila"
        className="about-photo"
      />

      <div className="about-text">

        <h2>WHO I AM</h2>

        <p>
          Sou estudante de Desenvolvimento de Sistemas com foco em Front-End.
          Atualmente estudo HTML, CSS e JavaScript, buscando evoluir minhas
          habilidades e criar interfaces modernas, responsivas e funcionais.
        </p>

      </div>

    </section>
  )
}

export default About