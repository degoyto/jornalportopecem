<template>
  <div class="container principal">
    <h1>Últimas Notícias</h1>
  <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
    <div >
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
        <router-link :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
            
        </router-link>
      </div>
    </div>
    </div>
    
  </div>
</div>

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
      noticias:null,
      so1: 1
      
    }  
  },
  methods:{
       
  },
  async mounted (){
    const total = 4;
    this.noticias = (await NoticiaService.novas(total)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .caixa{
    width:95%;
    margin-top:2%;
    margin-bottom:8%;
    
    margin-left:25px;
    padding-bottom:10px;
    min-height:139px;
    text-transform: capitalize;
    border-radius: 7px 7px 0 0;
  }
 
  .info{
    width:50%;
    text-align: left;
    float:right;
    margin-top:-18px;
    
    margin-right:25px;
  }
  .info p{
    margin-top: 5px;
    
    font-size:80%;

  }
  .info h1{
    font-size:100%;
    
    
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 10px; 
    margin-top:-10px;
    text-transform: uppercase;
  }
  .botao{
    margin-top:0px;
    background-color:#05341D;
    border: #05341D;
    float:right;
    font-size:70%; 
    width:20%;
    
  }
 
  .tipo{
    color:#8BB174;
    text-align: left;
  }
  .img{
    width:40%;
    height: 25vh;
    min-height: 100px;
    border-radius: 7px 0px 0 0;
    max-height:135px;
    
    background-repeat: no-repeat;
    background-size: cover;
    float:left;
    
  }
  .principal h1 {
    margin-top:15px;
    margin-bottom:15px;
  }
</style>
