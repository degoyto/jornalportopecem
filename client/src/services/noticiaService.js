import  Api from '@/services/Api'

export default {
    index () {
        
        return Api().get("gnoticias")
    },
    principais (total) {
        
        return Api().get(`principais/${total}`)
    },
    novas (total) {
        
        return Api().get(`novas/${total}`)
    },
    
    show(noticiaId){
        return Api().get(`noticia/${noticiaId}`)
    },
    post(noticias){
        return Api().post("gnoticias", noticias)
    },
    upload(fd){
        return Api().post("up", fd)
    },
    put (noticia) {
        return Api().put(`noticia/${noticia.id}`, noticia)
      }
}


