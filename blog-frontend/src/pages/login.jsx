import React, { Component, useState } from "react";
import "./login.css";

export default function Login () {
    

          const LoginDetails = {
            Email: "",
            Password: "",
          }

          const [login , setLogin] = useState(LoginDetails);
          const [buttonText, setButtonText] = useState('send');
          const [status, setStatus] = useState({});
          const [isLoggedIn, setIsLoggedIn] = useState(false);

          const onFormUpdate = (category, value) => {
                    setLogin({
                        ...login,
                        [category]: value
                    })
          }

          const handleSubmit = async (e) => {
            e.preventDefault();
            setButtonText("checking crenditals..")
            let response = await fetch("http://localhost:5001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8", 
                },
                body: JSON.stringify(login),
            });
            let result = await response.json();
            setLogin(login);
            setIsLoggedIn(true);
            if (result.code === 401) {
                setStatus({ success: false, message: 'Wrong Crenditals!!'});
            }
            else {
                setStatus({ success: true, message: "you are successfully logged in!!"});
                console.log(result);
            }
          }

        return (
            <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={handleSubmit}> 
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email Address</label>
                    <input 
                    value = {login.Email}
                    id="Email"
                    type="email"
                    name="Email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => onFormUpdate('Email', e.target.value)}
                    />
                </div>
                <br />
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password"
                    name="Password"
                    value={login.Password}
                    onChange={(e) => onFormUpdate('Password', e.target.value)}
                    id="Password"
                      className="form-control"
                      placeholder="Enter Password" 
                      />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember Me
                            </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn-btn-primary">
                        <span>{buttonText}</span>
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#forgot">password</a>
                </p>
                 {
                    status.message && 
                      
                <p className={status.success === false ? "danger": "success"}> {status.message} </p>
                     }
            </form>
            </div>
            </div>
        )
}