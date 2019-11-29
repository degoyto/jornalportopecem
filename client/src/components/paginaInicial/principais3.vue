<template>
  <div class="container pagina">
    <div class="container principal">
      <h1>OUTRAS NOTÍCIAS</h1>
      <hr />
      <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
        
          <div @click="navigateTo(noticia.id)" class="img"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>
        
          <div class="info">
            <div class="itens">
              <h1 class="titulon" @click="navigateTo(noticia.id)" v-line-clamp:20="2" >{{noticia.title}}</h1>
              <div class="tipo">
              
                {{noticia.tipo}}
              
              </div>
            
              <div @click="navigateTo(noticia.id)" class="conteudo" >
                <p v-line-clamp:20="3" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
              
              </div>
            <!-- <div class="data">
              {{noticia.createdAt | formatDate}}
            </div>-->
            
                <p @click="navigateTo(noticia.id)" class="btn-lendo">Continue Lendo</p>
            
            </div>
          </div>
      </div>
      


    </div>
    <div class="anuncio-coluna">
      
      <div class="colunas">
        <ul>
          <li><a href="#">COLUNA DIREITO ADUANEIRO</a></li>
          <li><a href="#">COLUNA MARKETING PORTUÁRIO</a></li>
          
        </ul>
        
        
      </div>
      <div class="div-anuncio">
        <anuncio class="anuncio img-anuncio1"></anuncio>
      </div>
      
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
      }
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
    color:#8BB174; 
    font-size:15px;
    
  }
  .btn-lendo:hover{
    color: #05341D;
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
    color:#8BB174;
  }
  .colunas ul li a {
    color:#05341D;
  }
  .colunas ul li a:hover {
    color:#8BB174;
    text-decoration:none;
  }

@media screen and (min-width: 992px){
            hr{
              display:block;
              border-top: 4px solid #8BB174;
              margin-left:25px;
              margin-top:3px;
              margin-bottom:10px;
              width:95%;
            }
            .principal{
              margin-left:-15px;
              
              width:95%;
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
              width:90%;
              margin-left:48px;
              height:100vh;
              min-height:560px;
              max-height:560px;
              background-color:#8BB174;
            }

}
</style>
