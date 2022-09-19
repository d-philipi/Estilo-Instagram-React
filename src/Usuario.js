import React from 'react';


export default function Usuario(props) {
  const[imagem,setImagem]= React.useState(props.imagem);
  const[subtitulo,setSubtitulo]= React.useState(props.subtitulo);
    return (
        <div class="usuario">
          <img onClick={() => setImagem(prompt("Deixe a Url da imagem que você quer colocar:"))} src={imagem} />
          <div class="texto">
            <strong>{props.nome}</strong>
            <span>
              {subtitulo}
              <ion-icon onClick={() => setSubtitulo(prompt("Digite seu novo nome:"))} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}

