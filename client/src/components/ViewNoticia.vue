<template>
    <div class="container caixa">
        <div class="cabecalho">
            <div class="tipo">
                {{noticia.tipo}}
            </div>
            <h1 class="titulo">{{noticia.title}}</h1>
            <div class="autor"> 
                Por {{noticia.autor}}
                
            </div>
            <div class="data">
                 {{noticia.createdAt | formatDate}}
            </div>
            
            
            
            
        </div>

        <div class="noticia">
            <img class="imagem" :src="noticia.fotoUrl">
            <div class="conteudo" >
                <div class="conteudo-texto" v-html="noticia.conteudo" >{{noticia.conteudo}}</div>
            
            </div>
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
        color:#8BB174;
    }
    
    .titulo{
        font-size:50px;
        margin-bottom:20px;
    }
    .autor{
        color:gray;
        font-size:20px;
        
    }
    
    .data{
        color:gray;
        font-size:20px;
        margin-bottom:40px;
        
    }
    .noticia{
        text-align: left;
        width:70%;
       
    }
    
    .noticia img{
        width:100%;
        margin-bottom:60px;
    }
    .conteudo{
        font-size:20px;
    }
    
    
</style>
