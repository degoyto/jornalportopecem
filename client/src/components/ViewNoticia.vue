<template>
    <div class="container caixa">
        


        <!-- https://medium.com/@ramansah/server-side-rendered-open-graph-meta-tags-in-vue-js-31d864004306 -->





        <!-- <vue-headful
            :title="noticia.title"
            description="Description from vue-headful"
        /> -->
        <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
        <div class="cabecalho">
            <div class="tipo">
                {{noticia.tipo}}
            </div>
            <h1 class="titulo">{{noticia.title}}</h1>
            <div class="resumo">
                <div class="conteudo-texto" v-html="noticia.resumo" >{{noticia.resumo}}</div>
            </div>
            <div class="autor"> 
                Por {{noticia.autor}}
                
            </div>
            <div class="data">
                 {{noticia.createdAt | formatDate}}
            </div>
            
            
            
            
        </div>

        <div class="noticia">
            <img class="imagem" :src="noticia.fotoUrl">
            <div class="legenda">
                {{noticia.legenda}}
            </div>
            
            <div class="conteudo" >
                <div class="conteudo-texto" v-html="noticia.conteudo" >{{noticia.conteudo}}</div>
            
            </div>
            <fb-comment :url="essaUrl.href" />
            <!-- <social-sharing url="http://jornalportodopecem.com.br/#/noticia/24"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
                <div>
                    <network network="email">
                        <i class="fa fa-envelope"></i> Email
                    </network>
                    <network network="facebook">
                        <i class="fa fa-facebook"></i> Facebook
                    </network>
                    <network network="googleplus">
                        <i class="fa fa-google-plus"></i> Google +
                    </network>
                    <network network="line">
                        <i class="fa fa-line"></i> Line
                    </network>
                    <network network="linkedin">
                        <i class="fa fa-linkedin"></i> LinkedIn
                    </network>
                    <network network="odnoklassniki">
                        <i class="fa fa-odnoklassniki"></i> Odnoklassniki
                    </network>
                    <network network="pinterest">
                        <i class="fa fa-pinterest"></i> Pinterest
                    </network>
                    <network network="reddit">
                        <i class="fa fa-reddit"></i> Reddit
                    </network>
                    <network network="skype">
                        <i class="fa fa-skype"></i> Skype
                    </network>
                    <network network="sms">
                        <i class="fa fa-commenting-o"></i> SMS
                    </network>
                    <network network="telegram">
                        <i class="fa fa-telegram"></i> Telegram
                    </network>
                    <network network="twitter">
                        <i class="fa fa-twitter"></i> Twitter
                    </network>
                    <network network="vk">
                        <i class="fa fa-vk"></i> VKontakte
                    </network>
                    <network network="weibo">
                        <i class="fa fa-weibo"></i> Weibo
                    </network> 
                    <network network="whatsapp">
                        <i class="fa fa-whatsapp"></i> Whatsapp
                    </network>
                </div>
            </social-sharing> -->
        </div>
        
        <principais4 idNoticia="4"></principais4>
    </div>

</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import principais4 from "@/components/paginaInicial/principais4"
import { ShareFacebook } from 'vue-share-social'
export default {
    
    data(){
        return{
            noticia:{
                
            },essaUrl:null
        }
    },
    // Usage with context the component
    head: {
        // To use "this" in the component, it is necessary to return the object through a function
        title: function () {
        return {
            inner: noticia.title
        }
        },
        meta: [
        { name: 'description', content: 'My description', id: 'desc' }
        ]
    },
    components:{
        principais4,
        ShareFacebook
    },
    methods: {
        myFunction() {
            document.getElementById("mymetatag").setAttribute("content", "5;URL=http://google.co.in");
        }
    },
    watch: {
        '$route.params.noticiaId': function (val) {
            window.location.reload();
        }
    },
    async mounted (){
        const noticiaId = this.$store.state.route.params.noticiaId
        this.noticia = (await NoticiaService.show(noticiaId)).data
        this.essaUrl = new URL(location.href);
        console.log("noticias")
    }
        
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .caixa{
        width:100%;
        
        padding-left:40px;
    }
    .cabecalho{
        text-align: left;
        margin-top:100px;

    }
    .tipo{
        text-transform: uppercase;
        margin-bottom:-5px;
        color:#009999;
    }
    
    .titulo{
        font-size:50px;
        margin-bottom:20px;
    }
    .resumo{
        color:gray;
        font-size:20px;
        margin-bottom:40px;
    }
    .autor{
        color:gray;
        font-size:15px;
        
    }
    
    .data{
        color:gray;
        font-size:15px;
        margin-bottom:40px;
        
    }
    .noticia{
        text-align: left;
        width:100%;
       
    }
    
    .noticia img{
        width:100%;
        margin-bottom:0px;
    }

    .legenda{
        font-size:12px;
        margin-bottom:60px;
        background-color:#C3DFE0;
        color:black;
    }

    .conteudo{
        font-size:20px;
        margin-bottom:50px;
    }
    .conteudo a{
        color:red;
    }
    @media screen and (min-width: 992px){
        .caixa{
        width:50%;
        
        padding-left:40px;
    }
    }
    
</style>
