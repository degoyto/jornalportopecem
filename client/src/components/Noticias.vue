<template>
  
<div  >
  <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
    <div class="img" v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>
    
    <div class="info">
      <div class="itens">
        <h1 v-line-clamp:20="2" >{{noticia.title}}</h1>
        <div class="tipo">
          {{noticia.tipo}}
          
        </div>
        
        <div class="autor"> 
          Autor: {{noticia.autor}}
          
        </div>
        
        <div class="conteudo" >
          <p v-line-clamp:20="5" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
          
        </div>
        <div class="data">
          {{noticia.createdAt | formatDate}}
        </div>
        <router-link :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
            <button type="button" class="btn btn-primary btn-sm botao"   >Ler Mais</button>
        </router-link>
        <router-link :to="{ name: 'noticia-edit',  params:{noticiaId: noticia.id}}">
            <button type="button" class="btn btn-primary btn-sm botao"   >Editar</button>
        </router-link>
      </div>
    </div>
  </div>
</div>

  <!--<div>
    
    
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id" >
        <img :src="noticia.fotoUrl">
        <div class="caixa-texto" >
          <h1 >{{noticia.title}}</h1>
          {{noticia.createdAt}}<br>
          {{noticia.tipo}}<br>
          {{noticia.autor}}<br>
          
          
          
          <p   v-html="noticia.conteudo">{{noticia.conteudo}}</p>

          <router-link :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
            <button type="button" class="btn btn-primary"  >Ler Mais</button>
          </router-link>
          
          
        </div>
      </div>
  

      
    
    
  </div>-->
    
</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"

export default {
  
  components:{
    Panel
  }, 
  data () {
    return {
      noticias:null
    }
    
  },
  methods:{
    
    
  },
  async mounted (){
    this.noticias = (await NoticiaService.index()).data
    
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .caixa{
    width:80%;
    margin-top:2%;
    margin-bottom:2%;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    margin-left:5%;
    height:40vh;
    min-height:300px;
  }
 
  .info{
    width:50%;
    float:right;
    padding-left:2%;
    padding-right: 2%;
    text-align: left;
  }
  .info p{
    margin-top: 5px;
    font-size:1vw;

  }
  .info h1{
    font-size:2.6vw;
    margin-bottom: -3px;
    
  }
  .tipo, .autor{
    font-size:0.7vw; 
  }
  .botao{
    margin-top:-25px;
    background-color:#05341D;
    border: #05341D;
    float:right;
    font-size:0.8vw; 
    width:20%;
  }
  .data{
    font-size: 0.8vw;
    margin-top:20px;
  }
  .tipo{
    width:80px;
    background-color:#05341D;
    color:white;
    text-align: center;
  }
  .img{
    width:38vw;
    height: 40vh;
    min-height:300px;
    float:left;
    background-repeat: no-repeat;
    background-size: cover;
    
    
  }
  

</style>
