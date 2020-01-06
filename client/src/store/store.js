import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        token:null,
        user: null,
        isUserLoggedIn: false,
        nome:true,
        noticia:null,
    },
    mutations: {
        setToken(state, token){
            state.token = token
            if(token){
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },
        setUser(state, user){
            state.user = user
        },
        setNome(state, nome){
            state.nome = nome
        },
        setNoticia(state, noticia){
            state.noticia = noticia
        }
    },
    actions:{
        setToken ({commit}, token){
            commit("setToken", token)
        },
        setUser ({commit}, user){
            commit("setUser", user)
        },
        setNome ({commit}, nome){
            commit("setNome", nome)
        },
        setNoticia(state, noticia){
            state.noticia = noticia
        }
    }

})