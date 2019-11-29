<template>

  <div class="container-flex" >
    
    <div class="container cabecalho ">
      <div class="acima">
        <p class="data">Pecém,  {{date | horaAtual}}</p>
        <div class="sociais">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
        </div>
        
      </div>
      
      <div class="abaixo">
        <img @click="navigateTu()" class="logo" src="../assets/logo.png">
        <anuncio class="img-anuncio1"></anuncio>
      </div>
      
     
    </div>

  <div class="container-flex back  ">
    <div class="container">
      <b-navbar toggleable="lg"  type="dark" class="barra " >
    

    <b-navbar-toggle target="nav-collapse" class="botao"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="menu" is-nav >
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
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="pesquise">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquise"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 btn-pesquisa" type="submit">Pesquise</b-button>
        </b-nav-form>

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
    
  <div >
  
</div>
  </div>
  
    
</div>
</template>


<script>
import AuthenticationService from "@/services/AuthenticationService"
import anuncio from "@/components/anuncio"
export default {
    data(){
      return{
        show: false,
        type: "#fff",
        
      }
      
    },
    components:{
      anuncio,
    },
    
    methods: {
      navigateTo (recebido){
        this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
        this.$router.go(1)
      },
      navigateTu (){
        this.$router.push({ name: 'root'})
        
      },
      logout(){
        this.$store.dispatch("setToken", null)
        this.$store.dispatch("setUser", null)
        this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-pesquisa{
    background-color:#8BB174;
    border-color:#8BB174;
  }

  .back{
    background-color:#06351d;
    
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
    margin-top:10px;
    display:flex;
  }
  /*cabeçalho celular*/
    .cabecalho{
      
      width:100%;
      
      margin-top:-40px;
      margin-bottom:1%;
      
    }
    .logo{
      width:40vw;
      
      
      margin-top:20px;
    }
    .logo:hover{
      cursor:pointer;
    }
    .anuncio-cabecalho{
      margin-left:10%;
      width:40vw;
      
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
    background-color:#06351d;
  }
  .cel {
    list-style: none;
  }
  .cel li a{
    color:white;
  }
   .cel li a:hover{
    color: #8BB174;
    text-decoration: none;
  }
  .botao{
    margin-left:90%;
  }
 

  /*versão pc*/
  
  @media screen and (min-width: 992px){
    
    .pesquise{
      display:none;
    }
    .logo{
        width:35vw;
        margin-left:22px;
        
        
    }
    .anuncio-cabecalho{
        
      width:39.5%;
      height:15vh;
      margin-right:-20%;
      
        
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
      color:#8BB174
      
  }
  .noticias-btn ul {
    position:absolute; 
    top:28px; 
    left:130px;
    border:1px solid #c0c0c0; 
    background-color: #06351d; 
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
    background-color: #06351d; 
    display:none;
  } 
  
}

</style>
