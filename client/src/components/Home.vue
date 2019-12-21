<template>
 <div class="container-flex">
   
    <principais></principais>
    <div class="container capa" v-show="$store.state.nome">
      <img class="loguito" src="../assets/logo.svg"/>
      <img @click="abre" class="delete" src="../assets/delete.svg"/>
      <p>
        O JORNAL PORTO DO PECÉM<br><br>

        Informar, reportar e opinar sobre todos os quadrantes da problemática econômica do Ceará,
        do Brasil e do mundo, com destaque para tudo que ocorre em torno do Complexo Industrial e
        Portuário do Pecém.<br><br>

        O Jornal Porto do Pecém tem como objetivo oferecer um trabalho jornalístico sobre todos os
        movimentos mercadológicos do Brasil especialmente do Ceará onde está localizado o Porto do
        Pecém.<br><br>

        Para obter a atenção de empresários, políticos, dirigentes governamentais, gestores,
        investidores, executivos, analistas de mercado, pretende-se que o Jornal Porto do Pecém seja
        um referencial para os órgãos de grande imprensa nacional. Destaque-se que nosso trabalho
        será em torno do que ocorre com as movimentações do 2º maior porto do Brasil.<br>

        É missão do Jornal Porto do Pecém relacionar em caráter de assessoria, sempre em uma linha
        de claro serviço de utilidade ao leitor, todos os segmentos econômicos e financeiros, nacionais
        e internacionais que possam estar direta ou indiretamente relacionadas com as múltiplas
        áreas da economia e das finanças regionais principalmente no campo de importação e
        exportação.<br><br>

        Por fim, transmitir através de uma informação jornalística de primeiro plano, novos mercados,
        novas oportunidades de negócios e o conhecimento real das potencialidades do Complexo
        Industrial Porto do Pecém.
      </p>
      
    </div>
    
    
    
    
    <div class="div-anuncio container-flex">
      <anuncio class="img-anuncio1 dois"></anuncio>
    </div>
    <principais3></principais3>
    <div class="container btn-destaques">
      <img  @click="navigateTo('caucaia')"  src="../assets/destaquecaucaia" class="caucaia cum" >
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
  data () {
    return {
        aberto: true
      }
    },  
  methods:{
      navigateTo (recebido){
          this.$router.push({ name: 'noticiasLista', params: { nome: recebido  } })
          window.location.reload()
        },
        abre(){
          this.aberto=false;
          this.$store.dispatch("setNome", this.aberto)
        }
  }
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .capa{
    position:fixed;

    width:80vw;
    padding:50px;
    padding-top:0px;
    padding-bottom:10px;
    left: calc(50vw - 540px);
    background:white;
    border-radius: 7px;
    top:20px;
    box-shadow: 0px 0px 5px black;
    font-size:15px;
    background: #f1f1f1;;
  }
  .loguito{
    width:40%;
  }
  .capa p{
    margin-top:30px;
    text-align: left;
  }
  .img-anuncio1{
    width:100%;
    margin-top:25px;
    margin-bottom: 20px;
    max-height:120px;
  }
  .delete{
    position:absolute;
    width:5%;
    margin-left:26%;
    top:1%;
  
  }
  .delete:hover{
    cursor:pointer;
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
