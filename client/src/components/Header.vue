<template>
  <div class="container-flex" >
    
    <div class="container cabecalho ">
      <!-- Aqui fica os itens acima da logo, como data e redes sociais -->
      <div class="acima">
        <p class="data">Pecém,  {{date | horaAtual}}</p>
        <div class="sociais">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
        </div>
        
      </div>
      <!-- Aqui se encontra a logo e o anuncio do cabeçalho -->
      <div class="abaixo">
        <img @click="navigateTu()" class="logo" src="../assets/logo.svg">
        <a href="http://www.rodopublis.com.br"><img class="anuncio" src="https://imagensportopecem2.s3.amazonaws.com/anuncios/rodo.jpg" /></a>
      </div> 
    </div>

    <div class="container-flex back  ">
      <div class="container">
        <!-- menu -->
        <b-navbar toggleable="lg"  type="dark" class="barra " >
      

          <b-navbar-toggle target="nav-collapse" class="botao"></b-navbar-toggle>
          <!-- Itens do menu -->
          <b-collapse id="nav-collapse" class="menu" is-nav >
            <!-- Esse aparece na versão pc -->
            <ul class="pc">
              
              <li><a @click="navigateTo('destaques')">destaques portuários</a></li>
            
              <li class="noticias-btn"><a @click="navigateTo('noticias')">Notícias</a>
                      <ul>
                            <li><a @click="navigateTo('nacionais')">Nacionais</a></li>
                            
                            <li><a @click="navigateTo('internacionais')">Internacionais</a></li>
                                          
                      </ul>
                  </li>
              
              <li><a @click="navigateTo('artigos')">Artigos e Opinião</a></li>
              
              <li><a @click="navigateTo('turismo')"> turismo</a></li>

              <li><a @click="navigateTo('comex')">Comércio exterior</a></li>
              <li><a @click="navigateTo('logistica')">logística e transporte</a></li>
              <li><a @click="navigateTo('entrevistas')">entrevistas</a></li> 
              <li><a @click="navigateTo('portos')">Portos do Brasil</a></li>
              <li><a @click="navigateTo('eventos')">Eventos</a></li>
                                              
                      
                  
            </ul>
            <!-- Esse so aparece na versão mobile -->
            <ul class="cel">
              
              <li><a @click="navigateTo('destaques')">destaques portuários</a></li>
              

              <li><a @click="navigateTo('nacionais')">Nacionais</a></li>
                            
              <li><a @click="navigateTo('internacionais')">Internacionais</a></li>
              
              <li><a @click="navigateTo('artigos')">Artigos e Opinião</a></li>
              
              <li><a @click="navigateTo('turismo')"> turismo</a></li>

              <li><a @click="navigateTo('comex')">Comércio exterior</a></li>
              <li><a @click="navigateTo('logistica')">logística e transporte</a></li>
              <li><a @click="navigateTo('entrevistas')">entrevistas</a></li> 
              <li><a @click="navigateTo('portos')">Portos do Brasil</a></li>
              <li><a @click="navigateTo('eventos')">Eventos</a></li>
                                              
                      
                  
            </ul>

          <!-- Right aligned nav items -->
          <!-- inicio do navbar que deixa o "pesquise" do celular ok-->
            <b-navbar-nav class="ml-auto">
              <b-nav-form class="pesquise">
                <b-form-input size="sm" class="mr-sm-2" v-model="itemPesquisado" @keyup.enter="pesquisa" placeholder="Pesquise"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 btn-pesquisa" @click="pesquisa">Pesquise</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar><!-- fim do menu -->

        <!-- Barra de pesquisa versão Pc -->
        <div class="pesquisa">
          <b-form-input size="sm" class="mr-sm-2" v-model="itemPesquisado" @keyup.enter="pesquisa" placeholder="Pesquise"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 btn-pesquisa" @click="pesquisa">Pesquise</b-button>
        </div>

      </div> <!-- fim do container -->
    </div><!-- fim do background que tem para deixar o menu com a tela toda -->

    

  </div> <!-- fim do container-flex -->
</template>


<script>
import AuthenticationService from "@/services/AuthenticationService"
import anuncio from "@/components/anuncios/anuncio"
export default {
    data(){
      return{
        show: false,
        type: "#fff",
        itemPesquisado:null,
        link:"https://http2.mlstatic.com/maquina-de-costura-reta-brother-usada-barata-anuncie-aqui-D_NQ_NP_892248-MLB31004356906_062019-F.jpg"
      }
      
    },
    components:{
      anuncio,
    },
    
    methods: {
      navigateTo (recebido){
        
        this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
        window.location.reload()
      },
      navigateTu (){
        this.$router.push({ name: 'root'})
        
      },
      logout(){
        this.$store.dispatch("setToken", null)
        this.$store.dispatch("setUser", null)
        this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
      },
      pesquisa(){
        this.$router.push({ name: 'resultado', params: { nome: this.itemPesquisado  } })
        window.location.reload()
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pesquisa{
  display:none;
}
  .btn-pesquisa{
    background-color:#009999;
    border-color:#009999;
  }

  .back{
    background-color:#142248;
    
    position: sticky;
    margin-top:10px; /* altura que está do topo */
    top: 10px; /* altura que vai parar antes do topo */
    
  }
  
  /*acima do cabeçalho*/
  .acima{
    width:100%;
    
  }
  .data{
    text-align: left;
    margin-left:25px;
    float:left;
    
    font-size:12px;
  }
  .sociais{
    margin-left: 85%;
  }
  .abaixo{
    width:100%;
    
    
    display:flex;
    justify-content: space-between;
  }
  /*cabeçalho celular*/
    .cabecalho{
      
      width:100%;
      
      margin-top:-40px;
      margin-bottom:-20px;
      
    }
    .logo{
      width:60%;
      
      
     
    }
    .logo:hover{
      cursor:pointer;
    }
    

    /*menu */
    .noticias-btn{
      display: none;
    }
    

  
    
    
  /*barra menu*/
  .pc{
    display:none;
  }
  .cel{
    display:block
  }
  .barra{
    
    
    color:white;
    text-transform: uppercase;
    background-color:#142248;
  }
  .cel {
    list-style: none;
  }
  .cel li a{
    color:white;
  }
   .cel li a:hover{
    color: #009999;
    text-decoration: none;
  }
  .botao{
    margin-left:90%;
  }
  .anuncio{
    width: 100%;
  }

  /*versão pc*/
  
  @media screen and (min-width: 992px){
    .anuncio{
        width:60%;
        margin-left:263px;
        margin-top:60px;
      }
    .pesquise{
      display:none;
      
    }
    .pesquisa{
      
      display:flex;
      width:445px;
      float:right;
      margin-top:20px;
      
     
      
    }
    .logo{
        width:50%;
        margin-left:0px;
        
        
    }
    

    /*barra menu*/
    .cel{
      display:none;
    }
    .pc{display:block}
    .noticias-btn{
      display: block;
    }
    
    .menu ul {
      padding:0px;
      margin-left:0px;
      margin-bottom:0px;
      list-style:none;
    }
    .menu ul li { 
      
      display: inline; }
    .menu ul li a {
      margin-left:5px;
      display: inline-block;
      cursor:pointer;
      /* visual do link */
      font-size: 65%;
      color: white;
      text-decoration: none;
      
  }
  
  
  
    .menu ul li a:hover {
      color:#009999;
      
  }
  .noticias-btn ul {
    position:absolute; 
    top:28px; 
    left:130px;
    border:1px solid #c0c0c0; 
    background-color: #142248; 
    display:none;
  } 
  	
  .noticias-btn:hover ul, .menu li.over ul{display:block;}
  .noticias-btn ul li{
    
    display:block; 
    width:150px;
  }
  .cel{
    display:none;
  }


  

}

@media screen and (min-width: 1200px){
  .menu ul {
      
      margin-left:20px;
      margin-bottom:0px;
      
    }
  .menu ul li a {
      margin-left:8px;
      /* visual do link */
      font-size: 12px;
      
      
  }
  .portos-btn ul {
    position:absolute; 
    top:28px; 
    left:950px;
    border:1px solid #c0c0c0; 
    background-color: #142248; 
    display:none;
  } 
  
}

</style>
