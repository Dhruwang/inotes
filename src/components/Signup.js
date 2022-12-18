import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [credentials, setCredentials] = useState({username:"",email:"",password:"",cpassword:""})
    const Navigate = useNavigate();
    const host = 'http://localhost:5000'
    const onChange = (event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:credentials.username, email:credentials.email, password:credentials.password})
    
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // save authToken and redirect 
            localStorage.setItem('token',json.token)
            Navigate("/")
    
          }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div class="form-group">
                    <label for="exampleInputUsername">Username</label>
                    <input type="text" class="form-control" id="username" name='username' value={credentials.username}  onChange={onChange} placeholder="Enter username" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Password" required minLength={5} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange} placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
