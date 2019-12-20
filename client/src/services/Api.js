import axios from 'axios'

export default()=>{
     return axios.create({
         baseURL: `https://jornal-porto-pecem-back.herokuapp.com/`
     })
}
