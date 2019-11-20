<template>

  <div class="container-flex" >
    <div class="container-flex cabecalho ">
      <div class="acima">
        <p class="data">Pecém,  {{date | horaAtual}}</p>
        <div class="sociais">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
        </div>
        
      </div>
      
      <div class="abaixo">
        <img class="logo" src="../assets/logo.png">
        <anuncio class="img-anuncio1"></anuncio>
      </div>
      
     
    </div>
  <div class="container-flex ">
    
    <div >
  <b-navbar toggleable="lg" type="dark" class="barra">
    

    <b-navbar-toggle target="nav-collapse" class="botao"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="itens" >
        <b-nav-item active href="#">Destaques Portuários</b-nav-item>
        <b-nav-item active href="#">Notícias Nacionais</b-nav-item>
        <b-nav-item active href="#">Notícias Internacionais</b-nav-item>
        <b-nav-item active href="#">Artigos e Opinião</b-nav-item>
        <b-nav-item active href="#">Comércio Exterior</b-nav-item>
        <b-nav-item active href="#">Logística e Transporte</b-nav-item>
        <b-nav-item active href="#">Entrevistas</b-nav-item>
        <b-nav-item active href="#">Portos do Brasil</b-nav-item>
        <b-nav-item active href="#">Eventos Portuários</b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquise"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Pesquise</b-button>
        </b-nav-form>

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
      navigateTo (route){
        this.$route.push(route)
      },
      logout(){
        this.$store.dispatch("setToken", null)
        this.$store.dispatch("setUser", null)
        this.$router.push({
          name: "root"
        })
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red;
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
  }
  /*cabeçalho celular*/
    .cabecalho{
      
      width:100%;
      
      margin-top:-40px;
      margin-bottom:1%;
      
    }
    .logo{
      width:40vw;
      float:left;
      margin-left:25px;
      margin-top:20px;
    }
    .anuncio-cabecalho{
      
      width:40vw;
      
    }
    

  
    
    
  /*barra menu*/
  .barra{
    color:white;
    text-transform: uppercase;
    background-color:#06351d;
  }
  .itens{
    font-size:3vw;
  }
  .botao{
    margin-left:90%;
  }

  /*versão pc*/
  
  @media screen and (min-width: 992px){
    .acima{
      
    }
    .logo{
        width:35vw;
        float:left;
        margin-left:25px;
        
    }
    .anuncio-cabecalho{
        
      width:40%;
      height:15vh;
      margin-right:-20%;
      
        
    }

    /*barra menu*/
    .barra{
      color:white;
      text-transform: uppercase;
      background-color:#06351d;
    }
    .itens{
      font-size:0.7vw;
    }
    .botao{
      margin-left:90%;
    }
    .navbar-dark .navbar-nav .nav-link:hover{
      color:#8BB174;
    }
}


</style>
