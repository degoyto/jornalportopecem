<template>
  <div class="container pagina">
    <div class="container principal">
      <h1>ÚLTIMAS NOTÍCIAS</h1>
      <hr />
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
          <a class="link-noticia" :href="'https://jornalportodopecem.com.br/noticia/' + noticia.id">
          <div  class="img"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>
        
          <div class="info">
            <div class="itens">
              <v-clamp autoresize :max-lines="3" class="titulon">{{ noticia.title }}</v-clamp>
              <div class="tipo">
              
                {{noticia.tipo}}
              
              </div>
            
              
            <!-- <div class="data">
              {{noticia.createdAt | formatDate}}
            </div>-->
            
                
            
            </div>
          </div>
          </a>
      </div>
      


    </div>
    <div class="anuncio-coluna">
      
      <div class="colunas">
        
        
        
      </div>
      <div class="div-anuncio">
        <a href="https://www.ignisfit.com/"><img src="https://firebasestorage.googleapis.com/v0/b/jornal-porto-do-pecem.appspot.com/o/ignis_1024.png?alt=media&token=212109ed-a7cd-47b5-89ad-0d28d0f894d2" 
                  class="anuncio img-anuncio1"/></a>
          
      </div>
      <div class="div-anuncio dois">
        <img src="https://firebasestorage.googleapis.com/v0/b/jornal-porto-do-pecem.appspot.com/o/anuncio.jpg?alt=media&token=df4d99dd-84b5-4a9e-bda9-e15c12842135" 
                  class="anuncio img-anuncio1"/>
          
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
      so1: 1
      
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
    const total = 4;
    this.noticias = (await NoticiaService.novas(total)).data
    
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titulon{
    font-size:18px;
    font-weight: 800;
  
    
  }
  hr{
    display: none;
  }
  .link-noticia{
    text-decoration: none;
    color:#212121;
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
    width:95%;
    margin-top:2%;
    margin-bottom:8%;
    
    margin-left:25px;
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
    
    
  }
  .tipo{
    font-size:50%;
    margin-bottom: 10px; 
    margin-top:0px;
    text-transform: uppercase;
    color:#009999;
    text-align: left;
  }
  .botao{
    margin-top:0px;
    background-color:#142248;
    border: #142248;
    float:right;
    font-size:70%; 
    width:20%;
    
  }
 
  
  .img{
    width:40%;
    height: 25vh;
    min-height: 100px;
    border-radius: 7px;
    max-height:135px;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    width:80%;
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
    cursor:pointer;
  }
  .div-anuncio{
              width:80%;
              margin-left:48px;
              border-style: solid;
              border-color:#142248 ;
              border-width: 1px;
              padding:10px;
              background-color:white;
              margin-top:20px;
              margin-bottom:40px;
            }
            .dois{
              padding:0px;
              background:none;
              border:none;
              background-color:#009999;
            }
            .dois img{
              width:100%;
              
            }

@media screen and (min-width: 992px){
            hr{
              display:block;
              border-top: 4px solid #009999;
              margin-left:25px;
              margin-top:3px;
              margin-bottom:10px;
              width:95%;
            }
            .principal{
              margin-left:-15px;
              
              width:160%;
              
            }
            .principal h1 {
              text-align: left;
              margin-left:25px;
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
              
              margin-top:60px;
              margin-bottom:60px;
            }
            .dois{
              padding:0px;
              background:none;
              border:none;
              background-color:#009999;
              border-width: 1px;
            }
            .dois img{
              width:100%;
              
            }

}
</style>
