function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageUser} alt="" />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.media} alt="" />
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
                    <img src={props.userLikeImage} alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    return (
        <div class="posts">
            <Post
                imageUser="./assets/img/meowed.svg"
                user="meowed"
                media="./assets/img/gato-telefone.svg"
                userLikeImage="./assets/img/respondeai.svg"
                userLike="respondeai"
                likeNumber="101.523"
            />
            <Post
                imageUser="./assets/img/barked.svg"
                user="barked"
                media="./assets/img/dog.svg"
                userLikeImage="./assets/img/adorable_animals.svg"
                userLike="adorable_animals"
                likeNumber="99.159"
            />
        </div>
    );
}