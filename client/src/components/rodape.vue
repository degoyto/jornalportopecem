<template>

  <div class="container-flex" >
    
    <div class="rodape ">
      
			<ul class="menu-rodape" >

		        <li><a href="#">INFORMAÇÕES ÚTEIS</a></li>
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
  .rodape{
    width:100%;
    background-color:#06351d;
    color:white;
  }
  .menu-rodape {
    padding:20px;
    list-style: none;
  }
  .menu-rodape a{
    color:white;

  }

</style>
