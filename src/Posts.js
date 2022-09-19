import React from 'react';

const postes = [
  {usuario:"meowed",
  imagem:"img/meowed.svg",
  conteudo:"img/gato-telefone.svg",
  curtida:"img/respondeai.svg",
  ultimacurtida:"respondeai",
  numerodecurtidas:101523},
  {usuario:"barked",
  imagem:"img/barked.svg",
  conteudo:"img/dog.svg",
  curtida:"img/adorable_animals.svg",
  ultimacurtida:"adorable_animals",
  numerodecurtidas:99159}
]

function Post(item){
  const [preenchimento, setPreenchimento]= React.useState("bookmark-outline");
  const [curtidas, setCurtidas]= React.useState(item.numerodecurtidas);
  const [coracao, setCoracao]= React.useState(<ion-icon onClick={curtir} name="heart-outline"></ion-icon>)

  function curtir(){
    if(curtidas > item.numerodecurtidas){
      setCurtidas(curtidas - 1);
      setCoracao(<ion-icon onClick={curtir} name="heart-outline"></ion-icon>);
    }else{
      setCurtidas(curtidas + 1);
      setCoracao(<ion-icon class="vermelho" onClick={curtir} name="heart"></ion-icon>);
    }
    
  }

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
        <img onClick={curtir} src={item.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {coracao}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => setPreenchimento("bookmark")} name={preenchimento}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={item.curtida} />
          <div class="texto">
            Curtido por <strong>{item.ultimacurtida}</strong> e <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {
    return (
        <div class="posts">
          {postes.map(Post)}
        </div>
    );
}