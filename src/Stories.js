const storys = [
    {nome: "9pag",imagem: "img/9gag.svg"},
    {nome: "meowed",imagem: "img/meowed.svg"},
    {nome: "barked",imagem: "img/barked.svg"},
    {nome: "nathanwpylestrangeplanet",imagem: "img/nathanwpylestrangeplanet.svg"},
    {nome: "wawawicomics",imagem: "img/wawawicomics.svg"},
    {nome: "respondeai",imagem: "img/respondeai.svg"},
    {nome: "filomoderna",imagem: "img/filomoderna.svg"},
    {nome: "memeriagourmet",imagem: "img/memeriagourmet.svg"}
]

function story(item) {
    return(
        <div class="story">
            <div class="imagem">
              <img src={item.imagem} />
            </div>
            <div class="usuario">
              {item.nome}
            </div>
        </div>
    );
}

export default function Stories() {
    return (
        <div class="stories">
          {storys.map(story)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}