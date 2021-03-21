import React, { useEffect, useState } from 'react';
import usersServices from '../../services/Users';

import {Link} from 'react-router-dom'

const [listUsers, SetListUsers] = useState([]);

useEffect(()=>{
  async function fetchDataUsers(){
    const res= await usersServices.listUsers();
    SetListUsers(res.data);
  }
  fetchDataUsers

},[])

function List(){
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
                    <Link to={"/users/delete"+item.id} class="btn btn-danger"> Delete </Link>
                </td>

                </tr>
                )
              })
            }
          <tr>
            <th scope="row">2</th>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>24</td>
            <td>tester</td>
            <td>
              <a href="#" class="btn btn-light"> Edit </a>
              <a href="#" class="btn btn-danger"> Delete </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>28</td>
            <td>admin</td>
            <td>
              <a href="#" class="btn btn-light"> Edit </a>
              <a href="#" class="btn btn-danger"> Delete </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default List;