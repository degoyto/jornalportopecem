<template>
  <div class="container principal">
    <h1>Notícias Principais</h1>
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
            <button type="button" class="btn btn-primary btn-sm botao"   >LER MAIS</button>
        </router-link>
      </div>
    </div>
    </div>
    
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
    width:100%;
    
    padding-left:2%;
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
    font-size:70%;
    margin-bottom: 20px; 
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
    width:100%;
    height: 40vh;
    border-radius: 7px 7px 0 0;
    min-height:300px;
    background-repeat: no-repeat;
    background-size: cover;
    
    
  }
  .principal h1 {
    margin-top:15px;
    margin-bottom:15px;
  }
  @media screen and (min-width: 992px){
    .caixa{
    width:50%;
    float:left;
  }
  .anuncio1{
      width:40%;
      float:right;
      margin-top:200px;
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
