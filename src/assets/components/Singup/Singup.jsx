import React, { useState } from "react";
import { LuEyeClosed, LuEye } from "react-icons/lu";
import "./Singup.css";

const Singup = () => {
  const [userName, setUserName] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmpassword, setCfmPassword] = useState("");

  const [eyePassword, setEyePassword] = useState(false);
  const [cloedPassword, setCloedPassword] = useState(false);

  const handleeyePassword = () => {
    setEyePassword(!eyePassword);
  };
  const handlecloedPassword = () => {
    setCloedPassword(!cloedPassword);
  };

  const handlecilck = () => {
    console.log(userName, fristName, lastName, email, password, cfmpassword);
  };

  return (
    <>
      <div className="singup_container">
        <div className="singup_rapper">
          <div className="singup_text">
            <h3>Sing-Up</h3>
          </div>
          <div className="inputrapper">
            <label For="UserName">UserName</label>
            <input
              type="text"
              name=""
              placeholder="UserName"
              value={userName}
              id="UserName"
              className="input_style"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <label for="FristName">FristName</label>
            <input
              type="text"
              name=""
              placeholder="FristName"
              value={fristName}
              id="FristName"
              className="input_style"
              onChange={(e) => {
                setFristName(e.target.value);
              }}
            />

            <label for="LastName">LastName</label>
            <input
              type="text"
              name=""
              placeholder="LastName"
              value={lastName}
              id="LastName"
              className="input_style"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <label for="Email">Email</label>
            <input
              type="Email"
              name=""
              placeholder="Email"
              value={email}
              id="Email"
              className="input_style"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label for="Password">Password</label>
            <div className="for_eye2">
              <input
                type={eyePassword ? "text" : "password"}
                name=""
                placeholder="Password"
                value={password}
                id="password"
                className="input_style3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {eyePassword ? (
                <LuEyeClosed
                  className="EyeClosed2"
                  onClick={handleeyePassword}
                />
              ) : (
                <LuEye className="EyeClosed" onClick={handleeyePassword} />
              )}
            </div>

            <label for="password">Comfirm Password</label>
            <div className="for_eye2">
              <input
                type={cloedPassword ? "text" : "password"}
                name=""
                placeholder="Comfirm Password"
                value={cfmpassword}
                id="password"
                className="input_style3"
                onChange={(e) => {
                  setCfmPassword(e.target.value);
                }}
              />
              {cloedPassword ? (
                <LuEyeClosed
                  className="EyeClosed2"
                  onClick={handlecloedPassword}
                />
              ) : (
                <LuEye className="EyeClosed" onClick={handlecloedPassword} />
              )}
            </div>
          </div>
          <button onClick={handlecilck} className="btn">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Singup;
