<template>
    <div class="container caixa">
        
        <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        <router-link class="link" :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
      
          <div class="img"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>
      
          <div class="info">
            <div class="itens">
              <h1 v-line-clamp:20="2" >{{noticia.title}}</h1>
              <div class="tipo">
                
              {{noticia.tipo}}
            
              </div>
          
              <div class="conteudo" >
                <p v-line-clamp:20="5" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
              
              </div>
              <!-- <div class="data">
                {{noticia.createdAt | formatDate}}
              </div>-->
          
              <button type="button" class="btn btn-primary btn-sm botao"   >Continue Lendo</button>
          
            </div>
          </div>
      
        </router-link>
      </div>
    </div>

</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"

export default {
    data(){
        return{
            noticias:{
                
            }
        }
    },
    methods: {
        
    },
    async mounted (){
        const nome = this.$store.state.route.params.nome
        this.noticias = (await NoticiaService.filtro(nome)).data
        

    },
    watch:{
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
    .img{
        width:100%;
        height: 40vh;
        border-radius: 7px 7px 0 0;
        min-height:300px;
        background-repeat: no-repeat;
        background-size: cover;
        max-height:350px;
    
    }
    
    
</style>
