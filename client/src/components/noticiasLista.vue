<template>
    <div class="container">
        <h1 class="titulo">{{nome}}</h1>
        
        <hr class="linhat" />
        <div class="teste">
            <div class="noti">
                <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
                   
                        
                        <div class="fotoInfo">
                            <div class="img" @click="navigateTo(noticia.id)"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>


                            <div class="info" >
                                <div class="itens">
                                    <h1  @click="navigateTo(noticia.id)" >{{noticia.title}}</h1>
                                <div class="tipo">
                                    
                                    {{noticia.tipo}}
                                
                                </div>
                                <div class="conteudo" >
                                    <div @click="navigateTo(noticia.id)" >
                                        <v-clamp autoresize :max-lines="4"  >{{ noticia.resumo}}</v-clamp>
                                    </div>
                                
                                </div>
                                <div class="botao-data">
                                    <div class="data texto">
                                        {{noticia.createdAt | formatDate}}
                                    </div>   
                                </div>
                                
                            
                                </div>
                            </div>
                        </div>   
                    <hr />
                </div>
                
            </div>
            
            <div class="propaganda">
                <anuncio class="anuncio"></anuncio>
                <anuncio class="anuncio"></anuncio>
                <anuncio class="anuncio"></anuncio>
            </div>
        </div>
        
    </div>

</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import anuncio from "@/components/anuncios/anuncio"
import VClamp from 'vue-clamp'
export default {
    
    data(){
        return{
            noticias:{
                
            },
            titulo:null,
            nome:null,
            
        }
    },
    components:{
        anuncio,
        VClamp
    },
    methods: {
        navigateTo (recebido){
            this.$router.push({ name: 'noticia', params: { noticiaId: recebido  } })
            this.$router.go(1)
      },
    },
    async mounted (){
        this.nome = this.$store.state.route.params.nome
        this.noticias = (await NoticiaService.filtro(this.nome)).data
        if (this.nome=="destaques"){
            this.nome="Destaques Portuários"
        }
        else if (this.nome=="noticias"){
            this.nome="Notícias"
        }
        else if (this.nome=="nacionais"){
            this.nome="Notícias Nacionais"
        }
        else if (this.nome=="internacionais"){
            this.nome="Notícias Internacionais"
        }
        else if (this.nome=="artigos"){
            this.nome="Artigos e Opinião"
        }
        else if (this.nome=="turismo"){
            this.nome="Porto e Turismo"
        }
        else if (this.nome=="comex"){
            this.nome="Comércio Exterior"
        }
        else if (this.nome=="logistica"){
            this.nome="Logística e Transporte"
        }
        else if (this.nome=="entrevistas"){
            this.nome="Entrevistas"
        }
        else if (this.nome=="portos"){
            this.nome="Portos do Brasil"
        }
        else if (this.nome=="eventos"){
            this.nome="Eventos"
        }
        else{
            this.nome="Nada Encontrado"
        }

    },
        
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .caixa:hover{
        cursor:pointer;
    }
    .propaganda{
            display:flex;
            justify-content: space-between;
            
            width:100%;
            
            
            
            margin-top:0px; /* altura que está do topo */
            top: 0px; /* altura que vai parar antes do topo */
            
            
        }
       
    .titulo{
        margin-top:30px;
        margin-bottom:-40px;
        text-transform: uppercase;  
        font-size:150%;
    }
    .botao-data{
        display:flex;
        justify-content: space-between;
    
    }
    .linhat{
        display:none;
    }
    .img-anuncio1{
      width:100%;
      margin-top:25px;
      margin-bottom: 20px;
      max-height:120px;
    }
    .caixa hr{
        margin-left:0px;
        width:100%;
        border-top: 1px solid #009999;
    }
    .fotoInfo{
        margin-bottom: 5%;
    }
    .container::first-letter{
        text-transform: uppercase;
    }
    .caixa{
        margin-left:25px;
        margin-top:50px;
    }
    .botao{
       
        background-color:#142248;
        border-color:#142248;
        margin-left:-20px;
    }
    .botao:hover{
        background-color:#009999;
        border-color:#009999;
    }
    .cabecalho{
       text-align: left;
    }
    .cabecalho h1{
        color:black;
    }
    .texto{
        font-size:12px;
        
    }
    .imagem{
        margin-top:20px;
        width:100%;
    }
    
    .noticia{
        width:60%;
        float:left;
        
    }
    .anuncio{
        margin-top:20px;
        background-color:#142248;
        color:white;
        
        width:33%;
    }
     .conteudo{
        margin-top: 40px;
        text-align: left;
        color:#2A2B2E;
        font-size: 15px;
       
    }
    .conteudo-texto img{
        width:20%;
    }
    .img{
        width:100%;
        height: 40vh;
        border-radius: 7px;
        min-height:300px;
        background-repeat: no-repeat;
        background-size: cover;
        max-height:350px;
    
    }
    .tipo{
        text-transform: capitalize;
        color:#009999;
        
    }
    .data{
        font-size:11px;
        color:gray;
        margin-top:20px;
    }
    @media screen and (min-width: 992px){
        .fotoInfo{
            display:flex;
            width:100%;
            
            
        }
        .caixa hr{
            width:93%;
            
        }
        .container{
            text-align: left;
            margin-top:60px;
        }
        .caixa{
            text-align: left;
        }
        .linhat{
            display:block;
            border-top: 4px solid #009999;
            margin-left:25px;
            margin-top:-5px;
            margin-bottom:-25px;
            width:65%;
        }
        .titulo{
            margin-top:20px;
            margin-bottom:8px;
                     
            margin-left:25px;
        }
        .img{
            width:45%;
        }
        .info{
                width:45%;
                margin-left:20px;
                margin-top:-10px;
            }
        .teste{
            text-align:left;
            display:flex;
        }
        .propaganda{
            display:flex;
            flex-direction: column;
            
            width:30%;
            padding-left:40px;
            height:800px;
            
            margin-top:0px; /* altura que está do topo */
            top: 0px; /* altura que vai parar antes do topo */
            position: sticky;
            
        }
        .anuncio{
            
            width:100%;
            height:20vh;
        }
        .noti{
            
            width:70%;
            
        }
        .tipo{
            margin-top:0px;
            font-size:12px;
        }
        .conteudo{
            margin-top:15px;
        }
        .itens h1{
            font-size:30px;
            margin-top:5px;
            height:150px;
        }
       

    }
    
    
</style>
