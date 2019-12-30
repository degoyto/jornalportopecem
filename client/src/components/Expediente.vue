<template>
  <div class="container">
    <h1 class="titulo">Expediente</h1>
        
    <hr class="linhat" />
    <div>
      <h3>EDITORES:</h3>
      <p>
        
        RUBENS FROTA<br>
        NONATO ALMEIDA<br>
        EVELINE FROTA
      </p>

      <h3>DESENVOLVEDOR WEB:</h3>
      <p>
        
        FELIPE HENRIQUE
      </p>
    </div>
  </div>

</template>
<script>

export default {
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    text-align: left;
    
    margin-top:100px;
  }
  .linhat{
    display:block;
    border-top: 4px solid #009999;
    margin-left:25px;
    margin-top:0px;
    
    width:65%;
  }
  .titulo{
    margin-top:10px;
    margin-left:25px;
    margin-bottom:0px;
    text-transform: uppercase;  
    font-size:150%;
  }
  .container div{
    
    margin-left:25px;
  }
  .container div h3{
    margin-top:20px;
    font-size:20px;
    font-weight: 700;
    margin-bottom:20px;
  }
  .container div p{
    margin-left:20px;
  }

</style>
