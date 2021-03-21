import React, { useEffect, useState } from 'react';
import usersServices from '../../services/Users';

import {Link} from 'react-router-dom'



function List(){
  
  const [listUsers, SetListUsers] = useState([]);

  useEffect(()=>{
    async function fetchDataUsers(){
      const res= await usersServices.listUsers();
      SetListUsers(res.data);
    }
    fetchDataUsers
  
  },[])

  const onClickDelete = async (i,id) => {

    var yes = confirm("are you sure to delete this item?");
    if (yes === true){

      const res = await usersServices.delete(id)

      if (res.success) {
        alert(res.message) 
        const newList = listUsers
        newList.splice(i,1)
        SetListUsers(newList);
      }
      else{
        alert(res.message);
      }
    }

  }

  
  return (
    <section>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
              listUsers.map((item)=>{
                return(
                 <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                   <td>{item.mail}</td>
                  <td>{item.age}</td>
                  <td>{item.role.rol_name}</td>
                  <td>
                    <Link to={"/users/edit"+item.id} class="btn btn-light"> Edit </Link>
                    <a href="#" class="btn btn-danger" onClick={()=>onClickDelete(i,item.id)}> Delete </a>
                </td>

                </tr>
                )
              })
            }
        </tbody>
      </table>
    </section>
  )
}

export default List;