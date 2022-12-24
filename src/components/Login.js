import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
const host = 'http://localhost:5000'
const [credentials, setcredentials] = useState({email:"",password:""})
let Navigate = useNavigate();

const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})

      });
      const json = await response.json()
      console.log(json)
      if(json.success){
        // save authToken and redirect 
        localStorage.setItem('token',json.token)
        props.showAlert("success","login successfully")
        Navigate("/")
      }
      else{
        props.showAlert("danger","login failed")
      }
}
const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

    return (
        <div className='container w-50'>
            <form  onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group my-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'  placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
