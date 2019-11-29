<template>
  <div class="container principal">
    <div class="cabecalho">
      <div class="titulo">
        <h1>NOTÍCIAS EM DESTAQUE</h1>
        <hr />
      </div>
      <div class="pesquisa">
        <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquise"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0 btn-pesquisa" type="submit">Pesquise</b-button>
      </div>
      
    </div>
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        
      
          <div class="img" 
            @click="navigateTo(noticia.id)" 
            v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"
            
            ></div>
        
          <div class="info">
            <div class="itens">
              <h1 class="titulon" @click="navigateTo(noticia.id)" v-line-clamp:20="2" >{{noticia.title}}</h1>
              
              <div class="tipo">
                
              {{noticia.tipo}}
            
              </div>
            
              <div class="conteudo" >
                <p @click="navigateTo(noticia.id)" v-line-clamp:20="5" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
              
              </div>
              <!-- <div class="data">
                {{noticia.createdAt | formatDate}}
              </div>-->
          
              <button @click="navigateTo(noticia.id)" type="button" class="btn btn-primary btn-sm botao"   >Continue Lendo</button>
              
            </div>
          </div>
      
       
      </div>
    

    
    
    <div class="div-anuncio">
        <anuncio class="anuncio1 img-anuncio1"></anuncio>
    </div>
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
  .caixa{
    width:90%;
    margin-top:2%;
    margin-bottom:2%;
    
    margin-left:25px;
    padding-bottom:10px;
    min-height:500px;
    text-transform: capitalize;
    
  }
  .img, .titulon, .tipo, .conteudo:hover{
    cursor:pointer;
  }
  .img:hover{
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
  .titulon:hover{
    color:#8BB174;
  }
  .tipo:hover{
    color:#05341D;
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
    border: #8BB174;
    float:right;
    font-size:70%; 
    width:20%;
    
  }
  .botao:hover{
    background-color:#8BB174;
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
  @media screen and (min-width: 992px){
    .btn-pesquisa{
      background-color:#05341D; border-color:#05341D;
    }
    .btn-pesquisa:hover{
      background-color:#8BB174; ; 
      border-color:#8BB174;
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
      border-top: 4px solid #8BB174;
      margin-left:25px;
      margin-top:3px;
      margin-bottom:-2px;
      width:96%;
  }
    .caixa{
    width:53%;
    float:left;
  }
  .anuncio1{
      width:100%;
      
      margin-top:260px;
      
    }
  .principal h1 {
    text-align: left;
    margin-left:25px;
    margin-bottom:0px;
  }
  .info h1{
    margin-left:0;
    
  }
  .div-anuncio{
      width:40%;
      float:right;
      margin-top:365px;
      margin-bottom: 20px;
      height:380px;
      
      height:100vh;
      min-height:360px;
      max-height:360px;
      background-color:#8BB174;
    }
  }
</style>
