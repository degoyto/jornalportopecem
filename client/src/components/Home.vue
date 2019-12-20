<template>
 <div class="container-flex">
   
    <principais></principais>
    
    
    
    
    
    <div class="div-anuncio container-flex">
      <anuncio class="img-anuncio1 dois"></anuncio>
    </div>
    <principais3></principais3>
    <div class="container btn-destaques">
      <img  @click="navigateTo('caucaia')"  src="../assets/destaquecaucaia.jpg" class="caucaia cum" >
      <img @click="navigateTo('complexo')" src="../assets/complexo.jpg" class="caucaia cdois">
    </div>
    

    
    
    
 
 </div>

</template>
<script>
import principais from "@/components/paginaInicial/principais"
import principais2 from "@/components/paginaInicial/principais2"
import principais3 from "@/components/paginaInicial/principais3"
import anuncio from "@/components/anuncios/anuncio"


export default {
  components:{
    principais,
    anuncio,
    principais2,
    principais3,
    
  }, 
  methods:{
      navigateTo (recebido){
          this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
          window.location.reload()
        },
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
  .btn-destaques img:hover{
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -o-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
      cursor:pointer;
    }
  .caucaia{
    width:95%;
    margin-bottom: 15px;
  }
  .colunas{
    text-align: left;
    margin-left:25px;
    margin-top:5px;
    padding-bottom:5px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 992px){
    .btn-destaques{
      
      display: flex;
      justify-content: space-between;
    }
    
    .caucaia{
      width:48%;
      
    }
    .cum{
      margin-left:25px;
    }
    
    
  }
 
</style>
