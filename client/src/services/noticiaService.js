import  Api from '@/services/Api'

export default {
    index () {
        
        return Api().get("gnoticias")
    },
    principais (total) {
        
        return Api().get(`principais/${total}`)
    },
    filtro (nome) {
        
        return Api().get(`filtro/${nome}`)
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
    },
    outras (exceto) {
        return Api().get(`outras/${exceto}`)
    },
    principais2 (exceto) {
        return Api().get(`principais2/${exceto}`)
    },
    
}


