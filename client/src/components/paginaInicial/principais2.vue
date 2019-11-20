<template>
  <div class="container principal">
    
  <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
    <div >
      
    
    <div class="info">
      <router-link class="link" :to="{ name: 'noticia',  params:{noticiaId: noticia.id}}">
          <div class="itens">
            <h1 v-line-clamp:20="2" >{{noticia.title}}</h1>
            <div class="tipo">
              
              {{noticia.tipo}}
              
            </div>
            
            <div class="conteudo" >
              <p v-line-clamp:20="3" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
              
            </div>
            <!-- <div class="data">
              {{noticia.createdAt | formatDate}}
            </div>-->
        
        </div> 
      </router-link>
      
    </div>
    </div>
    
  </div>
  <button type="button" class="btn btn-primary btn-lg botao" style="background-color: #05341D; border-color: #05341D"  >Boletim Portuário</button>
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
    const total = 3;
    this.noticias = (await NoticiaService.principais(total)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .caixa{
    width:90%;
    margin-left:25px;
    float:left;
    margin-bottom:5%;
    
    text-transform: capitalize;
    
  }
 
  .info{
    width:100%;
    
    padding-left:2%;
    padding-right: 2%;
    text-align: left;
  }
  .link{
    color:rgb(24, 23, 23);
  }
  .link:hover{
    color:rgb(0, 0, 0);
    text-decoration: none
  }
  .info p{
    margin-top: 5px;
    font-size:75%;

  }
  .info h1{
    font-size:150%;
    
    margin-top:5px;
    
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
    margin-bottom:5px;
    font-size:70%; 
    width:20%;
    margin-left:80%;
  }
 
  .tipo{
    color:#8BB174;
    text-align: left;
  }
  
</style>
