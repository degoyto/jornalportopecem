<template>
  <div class="container principal">
    
    <div class="noticia">
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        <div class="info">
          
              <div class="itens">
                <v-clamp autoresize :max-lines="3" class="titulon">{{ noticia.title }}</v-clamp>
                <div class="tipo">
                  {{noticia.tipo}}
                </div>
        
                
            </div> 
          
        </div>
      </div>
    </div>
      
    <button type="button" class="btn btn-primary btn-lg botao" >Boletim Portuário</button>
      
      
    
    
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
       navigateTo (recebido){
        this.$router.push({ name: 'noticia', params: { noticiaId: recebido  } })
        this.$router.go(1)
      }
  },
  async mounted (){
    const total = 3;
    this.noticias = (await NoticiaService.principais(total)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .botao{
    background-color: #05341D; border-color: #05341D
  }
  .botao:hover{
    background-color:#8BB174; 
    border-color:#8BB174;
  }
  .caixa{
    width:90%;
    margin-left:25px;
    float:left;
    margin-bottom:5%;
    
    text-transform: capitalize;
    
  }
  .titulon{
    font-size:15px;
    font-weight: 800;
    
  }
  .titulon, .tipo, .conteudo:hover{
    cursor:pointer;
  }
  .titulon:hover{
    color:#8BB174;
  }
  .tipo:hover{
    color:#05341D;
  }
  .info{
    width:100%;
    
    padding-left:2%;
    padding-right: 2%;
    text-align: left;
    
  }
 
  .info p{
    margin-top: 5px;
    font-size:75%;
    
    

  }
  .info h1{
    font-size:100%;
    overflow-wrap: break-word;
    word-wrap: break-word;

  /* Adds a hyphen where the word breaks */
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    hyphens: auto;
    margin-top:5px;
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 10px; 
    margin-top:0px;
    text-transform: uppercase;
  }
  .btn-lendo{
    color:#8BB174; 
    font-size:15px;
    
  }
  .btn-lendo:hover{
    color: #05341D;
    cursor:pointer;
    
  }
 
  .tipo{
    color:#8BB174;
    text-align: left;
  }


  @media screen and (min-width: 992px){
    
    .noticia{
      display:flex;
      float:left;
      width:56%;
      padding:0;
      margin-left:-5px;
     
    }
    
    .itens{
      width:100%;
      padding-left:0%;
      
      padding-right: 0%;
     
      margin-left:0px;
      

    }
    .botao{
      float:right;
      width:40%;
    }
    
  }
  
</style>
