const sugestoes = [
  {usuario:"bad.vibes.memes",imagem:"img/bad.vibes.memes.svg",razao:"Segue você"},
  {usuario:"chibirdart",imagem:"img/chibirdart.svg",razao:"Segue você"},
  {usuario:"razoesparaacreditar",imagem:"img/razoesparaacreditar.svg",razao:"Novo no Instagram"},
  {usuario:"adorable_animals",imagem:"img/adorable_animals.svg",razao:"Segue você"},
  {usuario:"smallcutecats",imagem:"img/smallcutecats.svg",razao:"Segue você"}
]

function sugestao (item){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={item.imagem} />
        <div class="texto">
          <div class="nome">{item.usuario}</div>
          <div class="razao">{item.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

export default function Sugestoes() {
    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map(sugestao)}
        </div>
    );
}