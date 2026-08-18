import { useState } from "react";

function GiftBox({ presente }) {
  const [aberto, setAberto] = useState(false);

  return (
    <article
      className={`
        gift-card
        ${aberto ? "open" : ""}
        ${presente.destaque ? "featured" : ""}
      `}
    >
      {!aberto ? (
        <button
          type="button"
          className="gift-closed"
          onClick={() => setAberto(true)}
        >
          <span className="gift-number">
            {presente.numero}
          </span>

          <div className="gift-main-icon">
            {presente.icone}
          </div>

          <h2>{presente.titulo}</h2>

          <p>{presente.subtitulo}</p>

          <span className="open-label">
            ABRIR PRESENTE
            <span>→</span>
          </span>
        </button>
      ) : (
        <div className="gift-opened">
          <div className="opened-header">
            <span className="opened-icon">
              {presente.icone}
            </span>

            <span className="opened-status">
              ARQUIVO ABERTO
            </span>
          </div>

          <h2>{presente.titulo}</h2>

          <div className="gift-body">
            {presente.conteudo}
          </div>

          <button
            type="button"
            className="close-button"
            onClick={() => setAberto(false)}
          >
            ← Fechar
          </button>
        </div>
      )}
    </article>
  );
}

export default GiftBox;