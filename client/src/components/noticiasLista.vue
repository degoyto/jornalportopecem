<template>
    <div class="container">
        <h1 class="titulo">{{titulo}}</h1>
        <div class="teste">
            <div class="noti">
                <div class= "caixa" v-for="noticia in noticias" :key="noticia.id"  >
                    
                        
                        <div class="fotoInfo">
                            <div class="img" @click="navigateTo(noticia.id)"  v-bind:style="{ backgroundImage: 'url(' + noticia.fotoUrl + ')' }"></div>


                            <div class="info" >
                                <div class="itens">
                                <h1 v-line-clamp:20="2" @click="navigateTo(noticia.id)" >{{noticia.title}}</h1>
                                <div class="tipo">
                                    
                                    {{noticia.tipo}}
                                
                                </div>
                            
                                <div class="conteudo"  @click="navigateTo(noticia.id)">
                                    <p v-line-clamp:20="5" v-html="noticia.conteudo" >{{noticia.conteudo}}</p>
                                
                                </div>
                                <button type="button" class="btn btn-primary btn-sm botao"  @click="navigateTo(noticia.id)" >Continue Lendo</button>
                            
                                </div>
                            </div>
                        </div>   
                    
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
import anuncio from "@/components/anuncio"
export default {
    data(){
        return{
            noticias:{
                
            },
            titulo:null
        }
    },
    components:{
        anuncio
    },
    methods: {
        navigateTo (recebido){
            this.$router.push({ name: 'noticia', params: { noticiaId: recebido  } })
            this.$router.go(1)
      },
    },
    async mounted (){
        const nome = this.$store.state.route.params.nome
        
        this.noticias = (await NoticiaService.filtro(nome)).data
        

    },
    async updated(){
        const nome = this.$store.state.route.params.nome
        this.titulo=nome;
        this.noticias = (await NoticiaService.filtro(nome)).data
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
    .container::first-letter{
        text-transform: uppercase;
    }
    .caixa{
        margin-top:50px;
        text-align: left;
        
        
    }
    .botao{
        margin-top:-10px;
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
    .conteudo{
        margin-top: 40px;
        text-align: left;
        color:#2A2B2E;
        font-size: 18px;
        margin-bottom:40px;
    }
    .noticia{
        width:60%;
        float:left;
        
    }
    .anuncio{
        margin-top:20px;
        float:right;
        background-color:#05341D;
        color:white;
        height:30vh;
        width:20vw;
    }
    .conteudo-texto img{
        width:20%;
    }
    .img{
        width:100%;
        height: 40vh;
        border-radius: 7px 7px 0 0;
        min-height:300px;
        background-repeat: no-repeat;
        background-size: cover;
        max-height:350px;
    
    }
    .tipo{
        text-transform: capitalize;
    }
    @media screen and (min-width: 992px){
        .fotoInfo{
            display:flex;
            width:100%;
            
            
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
       

    }
    
    
</style>
