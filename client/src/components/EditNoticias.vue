<template>
  <div>
    <panel>
        <!-- Material form register -->
<div class="card">

    <h5 class="card-header info-color white-text text-center py-4">
        <strong>Adicionar Noticia</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0" >

        <!-- Form -->
        <form class="text-center" style="color: #757575;" @submit="save"   enctype="multipart/formdata">

            <div class="form-row">
                <div class="col">
                    <!-- Título -->
                    <div class="md-form">
                        <label for="materialRegisterFormFirstName">Título</label>
                        <input type="text" id="materialRegisterFormFirstName" class="form-control" v-model="noticias.title"         required>
                        
                    </div>
                </div>

                <div class="col">
                    <!-- Tipo -->
                    <div class="md-form">
                      <label for="materialRegisterFormLastName">Tipo</label>
                      <select class="form-control" id="exampleFormControlSelect1" v-model="noticias.tipo" required>
                        <option value="" selected disabled hidden>Escolha um tipo</option>
                        <option value="nacional">Notícia Nacional</option> 
                        <option value="internacional" >Notícial Internacional</option>
                        <option value="artigo">Artigos</option>
                        <option value="porto e turismo">Porto e Turismo</option> 
                        <option value="comex" >Comércio Exterior</option>
                        <option value="logistica">Logística e Transporte</option>
                        <option value="entrevistas">Entrevistas</option> 
                        <option value="portos do Brasil" >Portos do Brasil</option>
                        <option value="eventos">Eventos</option>
                      </select>
                      <span>Selecionado: {{ noticias.tipo }}</span>
                    </div>
                </div>
            </div>

            <!-- Imagem-->
            <div class="md-form mt-0">
                <label for="materialRegisterFormEmail">Imagem</label>
                <input 
                  
                  ref="file" 
                  type="file" 
                  id="materialRegisterFormEmail" 
                  class="form-control"
                  
                  @change="onFileSelected">
                
                <img v-if="!mudouFoto" :src="noticias.fotoUrl" style="margin-top:20px; width:20vw">
                <img v-if="mudouFoto" :src="imagemHora" style="margin-top:20px; width:20vw">
            </div>

            <!-- Conteudo -->
            <div class="md-form">
                <br><label for="materialRegisterFormPassword"><h3>Conteúdo</h3>
                Dica: Em caso de adicionar um novo título no texto use &lth2&gt Exemplo: &lth2&gt Novo Título &lt/h2&gt. <br>
                O mesmo para negrito. Exemplo: &ltb&gt Negrito &lt/b&gt<br>
                O mesmo para itálico. Exemplo: &lti&gt Itálico &lt/i&gt<br><br>
                <b>Não esqueça de fechar a tag com</b> </>
                <textarea class="form-control" rows="20" id="comment" v-model="noticias.conteudo" required></textarea>
                
                <br>
                </label>
                
            </div>

            <!-- Autor -->
            <div class="md-form">
              <label for="materialRegisterFormPhone">Autor</label>
              <input id="materialRegisterFormPhone"  class="form-control" v-model="noticias.autor" >
                
                
            </div>

            
            <!-- Sign up button -->
            <b-button  type="submit"  variant="primary" style="margin-top:20px;">Cadastrar Notícia</b-button>

            {{noticias.fotoUrl}}

        </form>
        <!-- Form -->

    </div>

</div>
<!-- Material form register -->
    </panel>
    
  </div>
    
</template>
<script>
import NoticiaService from "@/services/NoticiaService"
import Panel from "@/components/Panel"
import axios from "axios"
export default {
  components:{
    Panel
  }, 
  data () {
    return {
      noticias: {
        title: null,
        conteudo: null,
        fotoUrl: null,
        tipo: null,
        autor: null,
      },
      imagemHora:null,
      selectFile: null,
      files:null,
      image: null,
      mudouFoto: false
      
      
    }
  },
  methods: {
    onFileSelected(event){
      this.files = this.$refs.file.files[0]
      var reader, files2 = event.target.files
      this.mudouFoto= true;

      reader = new FileReader()

      reader.onload = (event) =>{
        this.imagemHora = event.target.result
      }
      reader.readAsDataURL(files2[0])
      
    },
    async onUpload(){
      
      try{
        
        
        
      }catch(err){
        console.log(err)
      }
      
      
    },
    async save(){
      const fd = new FormData();
      console.log(this.files)
      fd.append("file", this.files)

      const noticiaId = this.$store.state.route.params.noticiaId
      try {
        if(this.mudouFoto){
          const url = await NoticiaService.upload(fd)
          this.noticias.fotoUrl = url.data 
        }
        
        await NoticiaService.put(this.noticias)
        this.$router.push({
          name: 'noticia',
          params: {
            noticiaId: noticiaId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const noticiaId = this.$store.state.route.params.noticiaId
      this.noticias = (await NoticiaService.show(noticiaId)).data
      console.log("noticia", this.noticias)
    } catch (err) {
      console.log(err)
    }
  }
  
    
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card p{
    font: normal 13px Arial;
    line-height: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 2px 8px;
    text-align: center;
    color: #FFFFFF;
    background: rgba(20, 20, 20, 0.8);
    opacity: 0.7;
    transition: max-height 1s, opacity 0.5s;
    line-height: 18px;
    max-height: 18px;
    
  }
  .card{
    margin-bottom:20px;
  }
</style>
