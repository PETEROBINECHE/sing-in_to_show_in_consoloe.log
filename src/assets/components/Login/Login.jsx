import React from 'react'
import { useState } from 'react'
import { LuEyeClosed, LuEye } from "react-icons/lu";
import "./Login.css"

const Login = () => {

    const [userName, setUserName] = useState('')
    const [fristName, setFristName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cfmpassword, setCfmPassword] = useState('')
    const [eyePassword, setEyePassword] = useState(false);
    const [cloedPassword, setCloedPassword] = useState(false);

    const handleeyePassword = () => {
        setEyePassword(!eyePassword);
    };
    const handlecloedPassword = () => {
        setCloedPassword(!cloedPassword);
    };
      
    const handlecilck = () => {
        console.log(userName, fristName, lastName, email, password, cfmpassword)
    }      

  return (
    <>
              <div className="singup_container1">
                  <div className="singup_rapper1">
                      <div className="singup_text1">
                          <h3>Log-In</h3>
                      </div>
                      <div className="inputrapper1">
                          <label for="Email">Email</label>
                          <input type="Email" name="" placeholder='Email' value={email} id="Email" className='input_style1' onChange={(e)=> {setEmail(e.target.value)}}/>
      
                          <label for="Password">Password</label>
                          <div className="for_eye">
                          <input type={eyePassword ? "text" : "password"} name="" placeholder='Password' value={password} id="password" className='input_style2' onChange={(e)=> {setPassword(e.target.value)}}/>

                          {
                            eyePassword ? ( <LuEyeClosed className='EyeClosed' onClick={handleeyePassword} /> ) : (<LuEye className='EyeClosed' onClick={handleeyePassword} />)
                          }
                          </div>



                          <label for="password">Comfirm Password</label>
                          <div className="for_eye">
                          <input type={cloedPassword ? "text" : "password"} name="" placeholder='Comfirm Password' value={cfmpassword} id="password" className='input_style2' onChange={(e)=> {setCfmPassword(e.target.value)}}/>
                          {
                            cloedPassword ? (<LuEyeClosed className='EyeClosed' onClick={handlecloedPassword} />) : (<LuEye className='EyeClosed' onClick={handlecloedPassword}/>)
                          }
                          </div>
                      </div>
                      <button onClick={handlecilck} className='btn1'>submit</button>
                  </div>
              </div>
    </>
  )
}

export default Login
