(this.webpackJsonpprojeto_07_instagramreact=this.webpackJsonpprojeto_07_instagramreact||[]).push([[0],{10:function(e,s,i){"use strict";i.r(s);var a=i(4),c=i.n(a),t=i(0);function r(){return Object(t.jsx)("div",{class:"navbar",children:Object(t.jsxs)("div",{class:"container",children:[Object(t.jsxs)("div",{class:"logo",children:[Object(t.jsx)("ion-icon",{name:"logo-instagram"}),Object(t.jsx)("div",{class:"separador"}),Object(t.jsx)("img",{src:"assets/img/logo.png",alt:""})]}),Object(t.jsx)("div",{class:"logo-mobile",children:Object(t.jsx)("ion-icon",{name:"logo-instagram"})}),Object(t.jsx)("div",{class:"instagram-mobile",children:Object(t.jsx)("img",{src:"assets/img/logo.png",alt:""})}),Object(t.jsx)("div",{class:"pesquisa",children:Object(t.jsx)("input",{type:"text",placeholder:"Pesquisar"})}),Object(t.jsxs)("div",{class:"icones",children:[Object(t.jsx)("ion-icon",{name:"paper-plane-outline"}),Object(t.jsx)("ion-icon",{name:"compass-outline"}),Object(t.jsx)("ion-icon",{name:"heart-outline"}),Object(t.jsx)("ion-icon",{name:"person-outline"})]}),Object(t.jsx)("div",{class:"icones-mobile",children:Object(t.jsx)("ion-icon",{name:"paper-plane-outline"})})]})})}function n(e){return Object(t.jsxs)("div",{class:"story",children:[Object(t.jsx)("div",{class:"imagem",children:Object(t.jsx)("img",{src:e.image,alt:""})}),Object(t.jsx)("div",{class:"usuario",children:e.user})]})}function o(){return Object(t.jsxs)("div",{class:"stories",children:[[{image:"./assets/img/9gag.svg",user:"9gag"},{image:"./assets/img/meowed.svg",user:"meowed"},{image:"./assets/img/barked.svg",user:"barked"},{image:"./assets/img/nathanwpylestrangeplanet.svg",user:"nathanwpylestrangeplanet"},{image:"./assets/img/wawawicomics.svg",user:"wawawicomics"},{image:"./assets/img/respondeai.svg",user:"respondeai"},{image:"./assets/img/filomoderna.svg",user:"filomoderna"},{image:"./assets/img/memeriagourmet.svg",user:"memeriagourmet"}].map((function(e){return Object(t.jsx)(n,{image:e.image,user:e.user})})),Object(t.jsx)("div",{class:"setinha",children:Object(t.jsx)("ion-icon",{name:"chevron-forward-circle"})})]})}var j=i(3),l=i(1),m=i.n(l);function d(e){var s="heart-outline",i="heart",a=m.a.useState(s),c=Object(j.a)(a,2),r=c[0],n=c[1],o=m.a.useState(""),l=Object(j.a)(o,2),d=l[0],u=l[1];return Object(t.jsxs)("div",{class:"post",children:[Object(t.jsxs)("div",{class:"topo",children:[Object(t.jsxs)("div",{class:"usuario",children:[Object(t.jsx)("img",{src:e.imageUser,alt:""}),e.user]}),Object(t.jsx)("div",{class:"acoes",children:Object(t.jsx)("ion-icon",{name:"ellipsis-horizontal"})})]}),Object(t.jsx)("div",{class:"conteudo",children:Object(t.jsx)("img",{src:e.media,alt:"",onDoubleClick:function(){n(i),u("like")}})}),Object(t.jsxs)("div",{class:"fundo",children:[Object(t.jsxs)("div",{class:"acoes",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("ion-icon",{name:r,class:d,onClick:function(){r===s?(n(i),u("like")):(n(s),u(""))}}),Object(t.jsx)("ion-icon",{name:"chatbubble-outline"}),Object(t.jsx)("ion-icon",{name:"paper-plane-outline"})]}),Object(t.jsx)("div",{children:Object(t.jsx)("ion-icon",{name:"bookmark-outline"})})]}),Object(t.jsxs)("div",{class:"curtidas",children:[Object(t.jsx)("img",{src:e.userLikeImage,alt:""}),Object(t.jsxs)("div",{class:"texto",children:["Curtido por ",Object(t.jsx)("strong",{children:e.userLike})," e ",Object(t.jsxs)("strong",{children:["outras ",e.likeNumber," pessoas"]})]})]})]})]})}function u(){return Object(t.jsx)("div",{class:"posts",children:[{imageUser:"./assets/img/meowed.svg",user:"meowed",media:"./assets/img/gato-telefone.svg",userLikeImage:"./assets/img/respondeai.svg",userLike:"respondeai",likeNumber:101.523},{imageUser:"./assets/img/barked.svg",user:"barked",media:"./assets/img/dog.svg",userLikeImage:"./assets/img/adorable_animals.svg",userLike:"adorable_animals",likeNumber:99.159}].map((function(e){return Object(t.jsx)(d,{imageUser:e.imageUser,user:e.user,media:e.media,userLikeImage:e.userLikeImage,userLike:e.userLike,likeNumber:e.likeNumber})}))})}function g(e){return Object(t.jsxs)("div",{class:"usuario",children:[Object(t.jsx)("img",{src:e.image,alt:""}),Object(t.jsxs)("div",{class:"texto",children:[Object(t.jsx)("strong",{children:e.user}),e.userName]})]})}function b(e){return Object(t.jsxs)("div",{class:"sugestao",children:[Object(t.jsxs)("div",{class:"usuario",children:[Object(t.jsx)("img",{src:e.imageUser,alt:""}),Object(t.jsxs)("div",{class:"texto",children:[Object(t.jsx)("div",{class:"nome",children:e.user}),Object(t.jsx)("div",{class:"razao",children:e.text})]})]}),Object(t.jsx)("div",{class:"seguir",children:"Seguir"})]})}function x(){return Object(t.jsxs)("div",{class:"sidebar",children:[[{image:"./assets/img/catanacomics.svg",user:"catanacomics",userName:"Catana"}].map((function(e){return Object(t.jsx)(g,{image:e.image,user:e.user,userName:e.userName})})),Object(t.jsxs)("div",{class:"sugestoes",children:[Object(t.jsxs)("div",{class:"titulo",children:["Sugest\xf5es para voc\xea",Object(t.jsx)("div",{children:"Ver tudo"})]}),[{imageUser:"./assets/img/bad.vibes.memes.svg",user:"bad.vibes.memes",text:"Segue voc\xea"},{imageUser:"./assets/img/chibirdart.svg",user:"chibirdart",text:"Segue voc\xea"},{imageUser:"./assets/img/razoesparaacreditar.svg",user:"razoesparaacreditar",text:"Novo no Instagram"},{imageUser:"./assets/img/adorable_animals.svg",user:"adorable_animals",text:"Segue voc\xea"},{imageUser:"./assets/img/smallcutecats.svg",user:"smallcutecats",text:"Segue voc\xea"}].map((function(e){return Object(t.jsx)(b,{imageUser:e.imageUser,user:e.user,text:e.text})}))]}),Object(t.jsx)("div",{class:"links",children:"Sobre \u2022 Ajuda \u2022 Imprensa \u2022 API \u2022 Carreiras \u2022 Privacidade \u2022 Termos \u2022 Localiza\xe7\xf5es \u2022 Contas mais relevantes \u2022 Hashtags \u2022 Idioma"}),Object(t.jsx)("div",{class:"copyright",children:"\xa9 2021 INSTAGRAM DO FACEBOOK"})]})}function O(){return Object(t.jsxs)("div",{class:"corpo",children:[Object(t.jsxs)("div",{class:"esquerda",children:[Object(t.jsx)(o,{}),Object(t.jsx)(u,{})]}),Object(t.jsx)(x,{})]})}function v(){return Object(t.jsxs)("div",{class:"fundo-mobile",children:[Object(t.jsx)("ion-icon",{name:"home"}),Object(t.jsx)("ion-icon",{name:"search-outline"}),Object(t.jsx)("ion-icon",{name:"add-circle-outline"}),Object(t.jsx)("ion-icon",{name:"heart-outline"}),Object(t.jsx)("ion-icon",{name:"person-outline"})]})}function h(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(r,{}),Object(t.jsx)(O,{}),Object(t.jsx)(v,{})]})}c.a.render(Object(t.jsx)(h,{}),document.querySelector(".root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.21efbe4f.chunk.js.map