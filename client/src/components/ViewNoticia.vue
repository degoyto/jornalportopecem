<template>
    <div class="container caixa">
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

            
        </div>
        
        <principais4 idNoticia="4"></principais4>
    </div>

</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import principais4 from "@/components/paginaInicial/principais4"

export default {
    data(){
        return{
            noticia:{
                
            }
        }
    },
    components:{
        principais4
    },
    methods: {
        
    },
    watch: {
        '$route.params.noticiaId': function (val) {
            window.location.reload();
        },
    },
    async mounted (){
        const noticiaId = this.$store.state.route.params.noticiaId
        this.noticia = (await NoticiaService.show(noticiaId)).data
        
        console.log("noticias", this.noticias)
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
