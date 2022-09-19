import React from 'react';

const postes = [
  {usuario:"meowed",
  imagem:"img/meowed.svg",
  conteudo:<img src="img/gato-telefone.svg" />,
  curtida:"img/respondeai.svg",
  ultimacurtida:"respondeai",
  numerodecurtidas:101.523},
  {usuario:"barked",
  imagem:"img/barked.svg",
  conteudo:<img src="img/dog.svg" />,
  curtida:"img/adorable_animals.svg",
  ultimacurtida:"adorable_animals",
  numerodecurtidas:99.159}
]

function post(item){
  return(
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={item.imagem} />
            {item.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        {item.conteudo}
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={item.curtida} />
          <div class="texto">
            Curtido por <strong>{item.ultimacurtida}</strong> e <strong>outras {item.numerodecurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
    return (
        <div class="posts">
          {postes.map(post)}
        </div>
    );
}