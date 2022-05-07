function MainUser(props) {
    return (
        <div class="usuario">
            <img src={props.image} alt="" />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.userName}
            </div>
        </div>
    );
}

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
    const mainUser = [
        {image:"./assets/img/catanacomics.svg",
        user:"catanacomics",
        userName:"Catana"}
    ];

    const sugests = [
        {
            imageUser: "./assets/img/bad.vibes.memes.svg",
            user: "bad.vibes.memes",
            text: "Segue você"
        },
        {
            imageUser: "./assets/img/chibirdart.svg",
            user: "chibirdart",
            text: "Segue você"
        },
        {
            imageUser: "./assets/img/razoesparaacreditar.svg",
            user: "razoesparaacreditar",
            text: "Novo no Instagram"
        },
        {
            imageUser: "./assets/img/adorable_animals.svg",
            user: "adorable_animals",
            text: "Segue você"
        },
        {
            imageUser: "./assets/img/smallcutecats.svg",
            user: "smallcutecats",
            text: "Segue você"
        }
    ];

    return (
        <div class="sidebar">
            {mainUser.map(user => 
                <MainUser
                    image={user.image}
                    user={user.user}
                    userName={user.userName}
                />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugests.map(sugest =>
                    <SugestaoItem
                        imageUser={sugest.imageUser}
                        user={sugest.user}
                        text={sugest.text}
                    />)}
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