<template>

  <div class="container-flex" >
    <anuncio class="img-anuncio1"></anuncio>
    
    <div class="rodape ">
      <div class="itens">
      <ul>
        <li><a href="#">destaques portuários</a></li>
        <li class="noticias-btn"><a href="#">Notícias</a></li>
        
        <li><a href="#">Artigos e Opinião</a></li>
        <li><a href="#"> turismo</a></li>

        <li><a href="#">Comércio exterior</a></li>
        <li><a href="#">logística e transporte</a></li>
        <li><a href="#">entrevistas</a></li> 
        <li><a href="#">Portos do Brasil</a></li>
        <li><a href="#">Eventos</a></li>
                                        
                
            
      </ul>
    </div>
      
			<ul class="menu-rodape" >

		        <li><a class="primeiro-link" href="#">INFORMAÇÕES ÚTEIS</a></li>
		        <li><a href="#">EMPREGOS NO PECÉM</a></li>   
		        <li><a href="#">EXPEDIENTE</a></li>
		        <li><a href="#">CONTATO</a></li>
		       
	        </ul>
			
			<p class="copyright">Copyright Jornal do Porto do Pecém 2019. Todos os direitos reservados.</p>
  
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
        type: "#fff"
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
  .img-anuncio1{
      width:100%;
      margin-top:25px;
      margin-bottom: 20px;
      max-height:120px;
    }
  .itens{
    display:none;
    
  }
  .itens ul{
    list-style: none;
    padding-top:20px;
    
  }
  .itens ul li{
    display: inline;
  }
  .itens ul li a {
    text-transform: capitalize;
    color:white;
    
    margin-left:20px;
    font-size:12px;
  }
   .itens ul li a:hover {
    
    color:#8BB174;
    text-decoration: none;
    
    
  }
  .rodape{
    width:100%;
    background-color:#06351d;
    color:white;
    margin-bottom:-250px;
  }
  .menu-rodape {
    padding:10px;
    list-style: none;
  }
  .menu-rodape a{
    color:white;

  }
  .menu-rodape a:hover{
    color:#8BB174;
    text-decoration: none;
    
  }
  @media screen and (min-width: 992px){
    .itens{
      display:block;
    }
    .menu-rodape li{
      display: inline;
    }
    .menu-rodape li a{
      margin-left:20px;
      
      font-size:20px;
    }
    

  }

</style>
