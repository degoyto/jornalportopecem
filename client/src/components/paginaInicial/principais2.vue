<template>
  <div class="container principal">
    
    <div class="noticia">
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        <router-link class="link-noticia" :to="{ name: 'noticia', params: { noticiaId: noticia.id}}">
          <div class="info"  >
                
                <div   class="itens">
                  <v-clamp autoresize class="titulon">{{ noticia.title }}</v-clamp>
                  <div class="tipo">
                    {{noticia.tipo}}
                    
                  </div>
          
                  
              </div> 
            
          </div>
        </router-link>
      </div>
    </div>
      
    <button type="button" class="btn btn-primary btn-lg botao" @click="navigateTu('boletim')">BOLETIM PORTUÁRIO</button>
      
      
    
    
  </div>

</template>
<script>

import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import VClamp from 'vue-clamp'
export default {
  
  components:{
    Panel,
    VClamp
  }, 
   props: {
    exceto: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      noticias:null,
      so1: 1,
      exceto:0
      
    }  
  },
  methods:{
       navigateTo (recebido){
        this.$router.push({ name: 'noticia', params: { noticiaId: recebido  } })
        this.$router.go(1)
      },
      navigateTu (recebido){
        
        this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
        window.location.reload()
      },
  },
  async mounted (){
    
    this.noticias = (await NoticiaService.principais2(this.exceto)).data
    console.log(this.noticias);
    this.noticias.splice(3, 1);
    console.log(this.noticias);
    //
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .botao{
    background-color: #142248; border-color: #142248;
    
    
    margin-right:-15px;
  }
  .link-noticia{
    text-decoration: none;
    color:#212121;
  }
  .botao:hover{
    background-color:#009999; 
    border-color:#009999;
  }
  .caixa{
    width:90%;
    margin-left:12px;
    float:left;
    margin-bottom:5%;
    
    
    
  }
  .titulon{
    font-size:15px;
    font-weight: 800;
    
  }
  .titulon, .tipo, .conteudo:hover{
    cursor:pointer;
  }
  .titulon:hover{
    color:#009999;
  }
  .tipo:hover{
    color:#142248;
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
    color:#009999; 
    font-size:15px;
    
  }
  .btn-lendo:hover{
    color: #142248;
    cursor:pointer;
    
  }
 
  .tipo{
    color:#009999;
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
      width:41%;
    }
    
  }
  
</style>
