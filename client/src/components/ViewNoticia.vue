<template>
    <div class="container caixa">
        <div class="cabecalho">
            <h1>{{noticia.title}}</h1>
            <div class="data texto">
                {{noticia.createdAt | formatDate}}
            </div>
            <div class="autor texto"> 
                Por {{noticia.autor}}
                Por {{noticia.fotoUrl}}
            </div>
        </div>

        <div class="noticia">
            <img class="imagem" :src="noticia.fotoUrl">
            <div class="conteudo" >
                <div class="conteudo-texto" v-html="noticia.conteudo" >{{noticia.conteudo}}</div>
            
            </div>
        </div>
        <div class="anuncio">
            Anuncie aqui
        </div>
        
    </div>

</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"

export default {
    data(){
        return{
            noticia:{
                
            }
        }
    },
    methods: {
        
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
        margin-top:50px;
        
        
        
    }
    .cabecalho{
       text-align: left;
    }
    .cabecalho h1{
        color:black;
    }
    .texto{
        font-size:12px;
        
    }
    .imagem{
        margin-top:20px;
        width:100%;
    }
    .conteudo{
        margin-top: 40px;
        text-align: left;
        color:#2A2B2E;
        font-size: 18px;
        margin-bottom:40px;
    }
    .noticia{
        width:60%;
        float:left;
        
    }
    .anuncio{
        margin-top:20px;
        float:right;
        background-color:#05341D;
        color:white;
        height:30vh;
        width:20vw;
    }
    .conteudo-texto img{
        width:20%;
    }
    
    
</style>
