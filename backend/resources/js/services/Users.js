const baseUrl = "http://127.0.0.1:8000/api/users";
import axios from 'axios';
 
const users = {}

users.listRole = async () =>{
    const  urlList = baseUrl+"/role"
    const res = await axios.get(urlList)
    .then(response => {return response.data;})
    .catch(error=>{return error;})
    return res;
}

users.save = async () =>{
    const  urlSave = baseUrl+"/create"
    const res = await axios.post(urlSave)
    .then(response => {return response.data;})
    .catch(error=>{return error;})
    return res;
}

users.listUsers = async () =>{
    const  urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response => {return response.data;})
    .catch(error=>{return error;})
    return res;
}
users.get = async (id) => {

    const urlGet = baseUrl+"/get/"+id
    const res = await axios.get(urlGet)
    .then(response=>{ return response.data })
    .catch(error => { return error })
    return res;
  
  }
export default users