<template>
  <div class="container principal">
    <div class="cabecalho">
      <div class="titulo">
        <h1>NOTÍCIAS EM DESTAQUE</h1>
        <hr />
      </div>
      
      
    </div>
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        
          <router-link class="link-noticia" :to="{ name: 'noticia', params: { noticiaId: noticia.id}}">
          <div class="img" 
            
            v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"
            
            ></div>
        
          <div class="info">
            <div class="itens">
              <h1 class="titulon">
                <v-clamp autoresize  >{{ noticia.title }}</v-clamp>
              </h1>
              
              <div class="tipo">
                
              {{noticia.tipo}}
            
              </div>
            
              <div class="conteudo" >
                <div  >
                  <v-clamp autoresize :max-lines="4"  >{{ noticia.resumo}}</v-clamp>
                </div>
              
              </div>
              
          
              
              
            </div>
          </div>
      </router-link>
       
      </div>
    

    
    
    <div class="div-anuncio">
        <VueTradingView class="trading" :options="{
         
                symbol: 'FX_IDC:USDBRL',
                timezone: 'America/Sao_Paulo',
                theme: 'light',
                locale: 'br',
                width: 360,
                height:240
          }"/>
          
        <a href="http://www.rodopublis.com.br"><img class="anuncio" src="https://imagensportopecem2.s3.amazonaws.com/anuncios/rodo.jpg" /></a>


    </div>
    <principais2 :exceto="noticias[0].id"></principais2>

    
</div>

</template>
<script>

import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import anuncio from "@/components/anuncios/anuncio"
import VClamp from 'vue-clamp'
import principais2 from "@/components/paginaInicial/principais2"
import VueTradingView from 'vue-trading-view';
export default {
  
  components:{
    Panel,
    anuncio,
    VClamp,
    principais2,
    VueTradingView,
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
      },
      
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
  .link-noticia{
    text-decoration: none;
    color:#212121;
  }
  .conteudo{
    
    height:120px;
  }
  .caixa{
    width:90%;
    margin-top:2%;
    margin-bottom:2%;
    
    margin-left:25px;
    padding-bottom:10px;
    min-height:500px;
    
    
  }
  
  .img, .titulon, .tipo, .conteudo:hover{
    cursor:pointer;
  }
  
  .titulon:hover{
    color:#009999;
  }
  .tipo:hover{
    color:#05341D;
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
    font-size:15px;
    font-weight: 300;
    
    margin-top:5px;
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 20px; 
    margin-top:1%;
    text-transform: uppercase;
  }
  .botao{
    margin-top:0px;
    background-color:#05341D;
    border: #009999;
    float:right;
    font-size:70%; 
    width:20%;
    
  }
  .botao:hover{
    background-color:#009999;
  }
 
  .tipo{
    color:#009999;
    text-align: left;
  }
  .img{
    width:100%;
    height: 40vh;
    border-radius: 7px 7px 0 0;
    min-height:300px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-height:350px;
    border-radius: 7px;
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
  .pesquisa{
    display:none;
  }
  .div-anuncio img{
      margin-top:20px;
      margin-bottom: 20px;
      width:100%;
    }
  @media screen and (min-width: 992px){
    .btn-pesquisa{
      background-color:#05341D; border-color:#05341D;
    }
   
    .btn-pesquisa:hover{
      background-color:#009999; ; 
      border-color:#009999;
    }
    .cabecalho{
      display:flex;
      justify-content: space-between;
    }
    .titulo{
      
      width:55%
    }
    .pesquisa{
      display:flex;
      margin-top:20px;
      
      width:40%;
    }
    hr{
      display:block;
      border-top: 4px solid #009999;
      margin-left:25px;
      margin-top:3px;
      margin-bottom:-2px;
      width:133%;
  }
    .caixa{
    width:53%;
    float:left;
  }
  .anuncio1{
      width:100%;
      
      margin-top:60px;
      
    }
  .principal h1 {
    text-align: left;
    margin-left:25px;
    margin-bottom:0px;
  }
  .info h1{
    margin-left:0;
    font-weight:700;
  }
  .div-anuncio{
      width:40%;
      float:right;
      margin-top:300px;
      margin-bottom: 20px;
      min-height:300px;
      max-height:300px;
      border-style:solid;
      border-width: 2px;
      border-color: #05341D;
      background-color: white; 
    }
    .div-anuncio img{
      margin-top:130px;
      width:100%;
    }
    .trading{
      margin-top:-280px;
    }
  }
</style>
