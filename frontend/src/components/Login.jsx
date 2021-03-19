import React from 'react'
import '../css/Login.css';

export const Login = () => {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')

   const saveData =(e)=>{
    e.preventDefault();

    if(!name.trim()){
        console.log('pls write your name')
        return
    }
    if(!email.trim()){
        console.log('pls write valid mail')
        return
    }
    
    if(!password.trim()){
        console.log('u need one pass')
        return
    }
    
    console.log('add user to db...' + name + password)

    e.target.reset()
    setName('')
    setEmail('')
    setPassword('')
}

   

    return (
        <div className="containerPrincipal">
        <div className="containerSecundario">
          <form className="form-group" onSubmit={ saveData }>
             <label>name: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={e => setName(e.target.value)}
            />
            <br />
            <label>Mail: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <label>Password: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </form>
        </div>
      </div>
    )
}
