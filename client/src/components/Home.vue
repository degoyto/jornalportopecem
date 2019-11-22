<template>
 <div class="container-flex">
   
    <principais></principais>
    
    
    
    <principais2></principais2>
    
    <div class="div-anuncio container-flex">
      <anuncio class="img-anuncio1 dois"></anuncio>
    </div>
    <principais3></principais3>
    <div class="container btn-destaques">
      <img src="../assets/destaquecaucaia.jpg" class="caucaia cum">
      <img src="../assets/complexo.jpg" class="caucaia cdois">
    </div>
    

    <div class="div-anuncio">
      <anuncio class="img-anuncio1"></anuncio>
    </div>
    
    
 
 </div>

</template>
<script>
import principais from "@/components/paginaInicial/principais"
import principais2 from "@/components/paginaInicial/principais2"
import principais3 from "@/components/paginaInicial/principais3"
import anuncio from "@/components/anuncio"


export default {
  components:{
    principais,
    anuncio,
    principais2,
    principais3,
    
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
