function SugestaoItem(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imageUser} alt="" />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">{props.text}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <SugestaoItem
                    imageUser="./assets/img/bad.vibes.memes.svg"
                    user="bad.vibes.memes"
                    text="Segue você"
                />
                <SugestaoItem
                    imageUser="./assets/img/chibirdart.svg"
                    user="chibirdart"
                    text="Segue você"
                />
                <SugestaoItem
                    imageUser="./assets/img/razoesparaacreditar.svg"
                    user="razoesparaacreditar"
                    text="Novo no Instagram"
                />
                <SugestaoItem
                    imageUser="./assets/img/adorable_animals.svg"
                    user="adorable_animals"
                    text="Segue você"
                />
                <SugestaoItem
                    imageUser="./assets/img/smallcutecats.svg"
                    user="smallcutecats"
                    text="Segue você"
                />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}