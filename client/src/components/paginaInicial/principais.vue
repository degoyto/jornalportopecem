<template>
  <div class="container principal">
    <h1>NOTÍCIAS EM DESTAQUE</h1>
    <hr />
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
  <anuncio class="img-anuncio1 anuncio1"></anuncio>
</div>

</template>
<script>

import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import anuncio from "@/components/anuncio"
export default {
  
  components:{
    Panel,
    anuncio
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
    const total = 1;
    this.noticias = (await NoticiaService.principais(total)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  hr{
    display: none;
  }
  .caixa{
    width:90%;
    margin-top:2%;
    margin-bottom:2%;
    
    margin-left:25px;
    padding-bottom:10px;
    min-height:500px;
    text-transform: capitalize;
    border-radius: 7px 7px 0 0;
  }
  .img-anuncio1{
      width:100%;
      margin-top:25px;
      margin-bottom: 20px;
  }
  .info{
    width:102%;
    
    
    padding-right: 2%;
    text-align: left;
  }
  .info p{
    margin-top: 5px;
    font-size:95%;

  }
  .info h1{
    font-size:200%;
    
    margin-top:5px;
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 20px; 
    margin-top:0.1%;
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
    width:100%;
    height: 40vh;
    border-radius: 7px 7px 0 0;
    min-height:300px;
    background-repeat: no-repeat;
    background-size: cover;
    
    
  }
  .principal h1 {
    margin-top:20px;
    font-size: 150%;
  }

  .link{
    color:rgb(24, 23, 23);
  }
  .link:hover{
    color:rgb(0, 0, 0);
    text-decoration: none
  }
  @media screen and (min-width: 992px){
    hr{
      display:block;
      border-top: 4px solid #8BB174;
      margin-left:25px;
      margin-top:3px;
      margin-bottom:-2px;
      width:53%;
  }
    .caixa{
    width:53%;
    float:left;
  }
  .anuncio1{
      width:40%;
      float:right;
      margin-top:260px;
      height:380px;
    }
  .principal h1 {
    text-align: left;
    margin-left:25px;
    margin-bottom:0px;
  }
  .info h1{
    margin-left:0;
    
  }
  }
</style>
