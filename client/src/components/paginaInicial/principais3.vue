<template>
  <div class="container principal">
    <h1>OUTRAS NOTÍCIAS</h1>
    <hr />
  <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
    <router-link class="link" :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
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
        
            
        
      </div>
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
  hr{
    display: none;
  }
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
    margin-left:0;
    
    
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
    font-size:150%;
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
   
  .principal h1 {
    text-align: left;
    margin-left:25px;
    margin-bottom:0px;
  }
  .caixa{
    width:55%;
    margin-top:1%;
    margin-bottom:3%;

  }
  .info h1{
    font-size:130%;
    margin-left:-1px;
    
    
  }
  .info p{
    margin-top:9px;
  }
  .tipo{
    margin-top:1%;
  }
 
  }
</style>
