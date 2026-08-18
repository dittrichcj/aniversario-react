import GiftBox from "./components/GiftBox";
import "./App.css";

function App() {
  const presentes = [
    {
      id: 1,
      numero: "01",
      icone: "✨",
      titulo: "Lembrete importante",
      subtitulo: "Caso você tenha esquecido",
      conteudo: (
        <>
          <p>
            Talvez você já saiba disso, mas é sempre bom reforçar:
          </p>

          <strong className="highlight">
            Você é foda!
          </strong>

          <p>
            Continue sendo essa pessoa gente boa e espero que esse novo ano
            venha cheio de coisas boas.
          </p>
        </>
      ),
    },

    {
      id: 2,
      numero: "02",
      icone: "🏆",
      titulo: "Certificado oficial",
      subtitulo: "Documento extremamente sério",
      conteudo: (
        <>
          <h3>Certificado de Pessoa Foda™</h3>

          <p>
            Este documento virtual certifica oficialmente que você:
          </p>

          <ul className="gift-list">
            <li>✅ É muito gente boa</li>
            <li>✅ Merece aproveitar muito o aniversário</li>
            <li>✅ Merece um ano absurdo de bom</li>
            <li>✅ Tem permissão para ignorar gente chata hoje</li>
          </ul>

          <small>
            Validade: até o próximo aniversário.
          </small>
        </>
      ),
    },

    {
      id: 3,
      numero: "03",
      icone: "📊",
      titulo: "Estatísticas oficiais",
      subtitulo: "Fonte: confia",
      conteudo: (
        <>
          <div className="stat">
            <span>Ser gente boa</span>

            <div className="stat-bar">
              <div style={{ width: "100%" }} />
            </div>

            <strong>100%</strong>
          </div>

          <div className="stat">
            <span>Chance de continuar sendo essa pessoa gente boa</span>

            <div className="stat-bar">
              <div style={{ width: "99%" }} />
            </div>

            <strong>99,9%</strong>
          </div>

          <div className="stat">
            <span>Chance de eu ter inventado essas estatísticas</span>

            <div className="stat-bar">
              <div style={{ width: "100%" }} />
            </div>

            <strong>100%</strong>
          </div>

          <div className="stat-source stat-source-column">
            <span>⚠️ Fonte dos dados:</span>

            <img
              src={`${import.meta.env.BASE_URL}fotos/confia.png`}
              alt="Confia"
              className="stat-source-image-large"
            />
          </div>
        </>
      ),
    },

    {
      id: 4,
      numero: "04",
      icone: "🚀",
      titulo: "Para esse novo ano",
      subtitulo: "Atualização de versão disponível",
      conteudo: (
        <>
          <h3>Versão nova desbloqueada 🎉</h3>

          <ul className="gift-list">
            <li>💰 Mais dinheiro</li>
            <li>🚀 Mais conquistas</li>
            <li>😂 Mais histórias boas</li>
            <li>😌 Menos estresse</li>
            <li>🚫 Menos gente chata</li>
            <li>✨ Mais momentos que realmente valem a pena</li>
          </ul>
        </>
      ),
    },

    {
      id: 5,
      numero: "FINAL",
      icone: "🎂",
      titulo: "Último presente",
      subtitulo: "Você chegou até aqui",
      destaque: true,
      conteudo: (
        <>
          <p>
            Infelizmente ainda não inventaram tecnologia para fazer um presente
            físico sair pela tela.
          </p>

          <p>
            Então fica o desejo:
          </p>

          <strong className="final-message">
            Que esse novo ano seja muito bom, que dê tudo certo nos seus planos
            e que você continue sendo essa pessoa gente boa que é.
          </strong>

          <div className="birthday-message">
            🎂 Feliz aniversário Nicas! 🥳
          </div>
        </>
      ),
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <span className="hero-tag">
            EVENTO IMPORTANTE DETECTADO
          </span>

          <div className="hero-icon">
            🎂
          </div>

          <h1>
            Feliz
            <span> aniversário!</span>
          </h1>

          <p>
            Uma homenagem extremamente séria para uma pessoa extremamente gente boa.
          </p>

          <a href="#presentes" className="start-button">
            Ver surpresa
            <span>↓</span>
          </a>
        </div>
      </section>

      <section id="presentes" className="gifts-section">
        <header className="section-header">
          <span>RELATÓRIO ANUAL</span>

          <h2>
            Algumas informações importantes
          </h2>

          <p>
            Abra os arquivos abaixo por sua conta e risco.
          </p>
        </header>

        <div className="gifts-grid">
          {presentes.map((presente) => (
            <GiftBox
              key={presente.id}
              presente={presente}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Desenvolvido exclusivamente para causar um
          <span> feliz aniversário 😎</span>
        </p>
      </footer>
    </main>
  );
}

export default App;