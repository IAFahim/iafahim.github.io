import React, {useState} from "react";
import Button from "./Button/Button";
import "./Login.css"
import {loginWithGoogle, logout} from '../../SupaBase/SupabseUni'

function Login() {
    let [data, setData]=useState();

    const loginHandler = () => {
        let data = {...loginWithGoogle("google")}
    }

    return (
        <div className="login">
            <Button text={"Login with Google"} onclick={loginHandler()}/>
            <p>{data}</p>
        </div>
    );
}

export default Login;