<template>
  <div class="container pagina">
    <div class="container principal">
      <h1>OUTRAS NOTÍCIAS</h1>
      <hr />
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        <a class="link-noticia" :href="'https://jornalportodopecem.com.br/noticia/' + noticia.id">
          <div  class="img"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>
        
          <div class="info">
            <div class="itens">
              <v-clamp  autoresize :max-lines="3" class="titulon">{{ noticia.title }}</v-clamp>
              <div class="tipo">
                
                {{noticia.tipo}}
              
              </div>

            </div>
          </div>
        </a>
      </div>
      


    </div>
    
    
  </div>
</template>
<script>

import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import VClamp from 'vue-clamp'
import anuncio from "@/components/anuncios/anuncio"

export default {
  
  components:{
    Panel,
    anuncio,
    VClamp
  }, 
  data () {
    return {
      noticias:null,
      exceto:null
      
    }  
  },
  methods:{
       navigateTo (recebido){
        this.$router.push({ name: 'noticia', params: { noticiaId: recebido  } })
        window.location.reload()
        this.$router.go(1)
      }
  },
  async mounted (){
    
    this.exceto = this.$store.state.route.params.noticiaId
    this.noticias = (await NoticiaService.outras(this.exceto)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titulon{
    font-size:18px;
    font-weight: 800;
  
    
  }
  .link-noticia{
    text-decoration: none;
    color:#212121;
  }
  hr{
    display: none;
    
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
    color:#009999;
  }
  .tipo:hover{
    color:#142248;
  }
  .caixa{
    width:100%;
    margin-top:2%;
    margin-bottom:8%;
    
    
    padding-bottom:10px;
    min-height:139px;
    
    border-radius: 7px 7px 0 0;
  }
 
  .info{
    width:50%;
    text-align: left;
    float:right;
    margin-top:20px;
    
    margin-right:25px;
  }
  .info p{
    margin-top: 4px;
    
    font-size:78%;

  }
  .info h1{
    font-size:100%;
    margin-left:0;
    background-color:red;
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 10px; 
    
    text-transform: uppercase;
  }
  .botao{
    margin-top:0px;
    background-color:#142248;
    border: #142248;
    float:right;
    font-size:70%; 
    width:20%;
    
  }
 
  .tipo{
    color:#009999;
    text-align: left;
  }
  .img{
    width:40%;
    height: 25vh;
    min-height: 100px;
    border-radius: 7px;
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
  .btn-lendo{
    color:#009999; 
    font-size:15px;
    
  }
  .btn-lendo:hover{
    color: #142248;
    cursor:pointer;
    
  }

  .img-anuncio1{
    width:100%;
    margin-top:25px;
    margin-bottom: 20px;
    max-height:120px;
  }
  .colunas {
    text-align: left;
    margin-left:25px;
    margin-top:5px;
    padding-bottom:5px;
    margin-bottom: 5px;
  }
  .colunas ul li{
    color:#009999;
  }
  .colunas ul li a {
    color:#142248;
  }
  .colunas ul li a:hover {
    color:#009999;
    text-decoration:none;
  }

@media screen and (min-width: 992px){
            hr{
              display:block;
              border-top: 4px solid #009999;
              margin-left:0px;
              margin-top:3px;
              margin-bottom:10px;
              width:95%;
            }
            .principal{
              margin-left:-30px;
              
              width:95%;
            }
            .principal h1 {
              text-align: left;
              margin-left:0px;
              margin-bottom:0px;
            }
            .caixa{
              width:100%;
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
            .pagina{
              display:flex;
              
            }
            .anuncio-coluna{
              display:flex;
              flex-direction: column;
              padding-top:18px;
              
              
            }
            .colunas{
              
            }
            .div-anuncio{
              width:90%;
              margin-left:48px;
              height:100vh;
              min-height:560px;
              max-height:560px;
              background-color:#009999;
            }

}
</style>
