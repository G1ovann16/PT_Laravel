import React, { Component } from 'react';

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
          <tr>
            <th scope="row">1</th>
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