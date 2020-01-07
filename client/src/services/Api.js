import axios from 'axios'

export default()=>{
     return axios.create({
         baseURL: `https://dev-aileron-262703.appspot.com/`
         //baseURL: `http://localhost:8081`
     })
}
