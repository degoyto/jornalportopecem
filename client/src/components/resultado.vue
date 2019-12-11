<template>
    <div class="container">
        <h1 class="titulo">resultados para "{{nome}}"</h1>
        
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
import anuncio from "@/components/anuncio"
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
    
        this.noticias = (await NoticiaService.resultado(this.nome)).data
        

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
        border-top: 1px solid #8BB174;
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
       
        background-color:#05341D;
        border-color:#05341D;
        margin-left:-20px;
    }
    .botao:hover{
        background-color:#8BB174;
        border-color:#8BB174;
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
        background-color:#05341D;
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
        color:#8BB174;
        
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
            border-top: 4px solid #8BB174;
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
