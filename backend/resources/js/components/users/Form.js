import React, { useEffect, useState } from 'react';
import usersServices from '../../services/Users';

function Form(){

  const [listRol, SetListRol]= useState([]);
  const [name, SetName]= useState(null);
  const [mail, SetMail]= useState(null);
  const [age, SetAge]= useState(null);
  const [rol, SetRol]= useState(null);

  useEffect(()=>{
    async function fetchDataRol(){
      const res = await usersServices.listRole
      SetListRol(res.data)
    }
    fetchDataRol()
  },[])

  const saveUser= async () =>{
    const data = {
      name,
      mail,
      age,
      rol
    }
    const res = await usersServices.save(data);

    if(res.success){
      alert(res.message)
    }else{
      alert(res.message)
    }
  }
  return(
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Name employee</label>
          <input type="text" class="form-control" placeholder="Name" 
          onChange={(event)=>SetName(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com"
          onChange={(event)=>SetMail(event.target.value)}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="address">Age</label>
          <input type="text" class="form-control" placeholder="28"
          onChange={(event)=>SetAge(event.target.value)}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
					<label for="rol">Rol </label>
					<select id="inputState" class="form-control" onChange={(event)=>SetRol(event.target.value)}
          >
             <option selected>Choose...</option>
             
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
          <button class="btn btn-primary btn-block" type="submit"
          onClick={()=>saveUser()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
