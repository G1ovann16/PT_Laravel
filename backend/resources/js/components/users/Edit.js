import React, { useEffect, useState } from 'react';
import usersServices from '../../services/Users';

function Edit(props){

  const [ id, setId ] = useState(null);
  const [ name, setName ] = useState("ppp");
  const [ email, setEmail ] = useState(null);
  const [ age, setAge ] = useState(null);
  const [ rol, setRol ] = useState(null);
  const [ selectedRol , setSelectRol ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

  useEffect(()=>{

    async function fetchDataUsers(){
      let id = props.match.params.id;
      const res = await usersServices.get(id);

      if (res.success) {
        const data = res.data
        setId(data.id)
        setName(data.name)
        setEmail(data.email)
        setAge(data.age)
        setRol(data.rol)
        setSelectRol(data.role.rol_name)
      }
      else {
        alert(res.message)
      }
    }
    fetchDataEmployee();

    async function fetchDataRol(){
      const res = await usersServices.listRole();
      setListRol(res.data)
    }
    fetchDataRol();

  },[])

  const updateUsers = async () => {

    const data = {
      id,
      name,
      email,
      age,
      rol
    }

    const res = await usersServices.update(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }

  }


  return (
    <div>
      <h4>Edit customer  {userId}  </h4>
      <hr/>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name</label>
          <input type="text" class="form-control" value={name}
          onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com"
          value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Age</label>
          <input type="text" class="form-control" placeholder="1234 Main St" 
           value={age} onChange={(event)=>setAge(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
        <label for="phone">Rol</label>
          <select id="inputState" class="form-control" value={rol}>
             {
               listRol.map((item)=>{
                 return(
                   <option value={item.rol_id}>{item.rol_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
