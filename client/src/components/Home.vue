<template>
 <div class="container-flex">
    <principais></principais>
    
    <anuncio class="img-anuncio1"></anuncio>
    <principais2></principais2>
    <button type="button" class="btn btn-primary btn-lg botao" style="background-color: #05341D; border-color: #05341D"  >Boletim Portuário</button>
    <anuncio class="img-anuncio1"></anuncio>
    <principais3></principais3>
    <anuncio class="img-anuncio1"></anuncio>
    <img src="../assets/destaquecaucaia.jpg" class="caucaia">
    <img src="../assets/complexo.jpg" class="caucaia">

    <div class="colunas">
      <a href="#">COLUNA DIREITO ADUANEIRO</a><br>
      <a href="#">COLUNA MARKETING PORTUÁRIO</a>
    </div>
    <anuncio class="img-anuncio1"></anuncio>
    <rodape></rodape>
 
 </div>

</template>
<script>
import principais from "@/components/paginaInicial/principais"
import principais2 from "@/components/paginaInicial/principais2"
import principais3 from "@/components/paginaInicial/principais3"
import anuncio from "@/components/anuncio"
import rodape from "@/components/rodape"

export default {
  components:{
    principais,
    anuncio,
    principais2,
    principais3,
    rodape
  }
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .img-anuncio1{
    width:100%;
    margin-top:25px;
    margin-bottom: 20px;
  }
  .caucaia{
    width:90%;
    margin-bottom: 15px;
  }
  .colunas{
    text-align: left;
    margin-left:25px;
    margin-top:5px;
    padding-bottom:5px;
    margin-bottom: 5px;
  }
</style>
