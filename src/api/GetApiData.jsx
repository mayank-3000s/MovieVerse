import axios from 'axios'

const api = axios.create({
    baseURL: 'https://www.omdbapi.com/',
})
//const search = 'Pokemon'
const apiKey = import.meta.env.VITE_API_KEY 
export const getApiData = async({request})=>{
     const url = new URL(request.url);
     const search = url.searchParams.get("q") || 'Pokemon'
     console.log(search);
    try{
        const response = await api.get(`?s=${search}&apikey=${apiKey}`);
        console.log(response)
        return response.data ;
    } catch(error){
        console.log(error)
    }
}
