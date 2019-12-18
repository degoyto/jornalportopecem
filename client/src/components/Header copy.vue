<template>

  <div class="container-flex" >
    <div class="container-flex cabecalho ">
      <img src="https://imagensportopecem2.s3.amazonaws.com/13ac6a4d1800997e4d8500d56e7f8019-anuncio.png">
      
    </div>


    <nav class="navbar navbar-expand-lg navbar-dark barra " style="background-color: #142248; ">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="noticias">
              <a class="nav-link" style="color: white">Destaques Portuários</a>
            </router-link>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">Notícias Nacionais</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">Notícias Internacionais</a>
          </li>
          
          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Artigos e Opinião</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Porto e Turismo</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Comércio Exterior</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Logística e Transporte</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Entrevistas</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Portos do Brasil</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Eventos Portuários</a>
          </li>

         
          
          
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <router-link to="login">
            <button v-if="!$store.state.isUserLoggedIn" class="btn btn-outline-light my-2 my-sm-0" type="submit" >Login</button>
          </router-link>
        <button v-if="$store.state.isUserLoggedIn" @click="logout" class="btn btn-outline-light my-2 my-sm-0" type="submit" >Sair</button>
      </form>
    </div>
  </nav>
</div>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
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

  /*cabeçalho celular*/
    .cabecalho{
      
      width:100%;
      
      margin-top:-5%;
      margin-bottom:5%;
    }
    .cabecalho img{
      width:45%;
      margin-left:-48%;
    }
    

  /*cabeçalho pc*/
    @media screen and (min-width: 992px){
      
    }
    
  /*barra menu*/


</style>
