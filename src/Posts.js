import React from "react";

function Post(props) {
    const INITIAL_NAME = "heart-outline";
    const LIKE_NAME = "heart";

    const [iconName, setIconName] = React.useState(INITIAL_NAME);
    const cont = 0;

    function likePostMedia() {
        setIconName(LIKE_NAME);
    }

    function likePost() {
        if (iconName === INITIAL_NAME) {
            setIconName(LIKE_NAME);
        } else{
            setIconName(INITIAL_NAME);
        }
    }

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
                <img src={props.media} alt="" onDoubleClick={likePostMedia}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconName} onClick={likePost}></ion-icon>
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
    const posts = [
        {imageUser:"./assets/img/meowed.svg",
        user:"meowed",
        media:"./assets/img/gato-telefone.svg",
        userLikeImage:"./assets/img/respondeai.svg",
        userLike:"respondeai",
        likeNumber:101.523},
        {imageUser:"./assets/img/barked.svg",
        user:"barked",
        media:"./assets/img/dog.svg",
        userLikeImage:"./assets/img/adorable_animals.svg",
        userLike:"adorable_animals",
        likeNumber:99.159}
    ];
    
    return (
        <div class="posts">
            {posts.map(post => 
                <Post 
                    imageUser={post.imageUser}
                    user={post.user}
                    media={post.media}
                    userLikeImage={post.userLikeImage}
                    userLike={post.userLike}
                    likeNumber={post.likeNumber}
                />)
            }
        </div>
    );
}