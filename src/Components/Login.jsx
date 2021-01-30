import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Login = () => {

  const responseSuccessGoogle = (response) =>{
    console.log(response);
    axios({
      method : "POST",
      url : "http://localhost:8000",
      data: {tokenId : response.tokenId}
    }).then(response =>{
      console.log(response);
    })
  }

  const responseErrorGoogle = (response) =>{
    console.log(response);
  }
  return (
    <>
      <div className="Container-center">
        <FormControl >
          <p>Sign in Chargebee!
                    <div className="mb-3">
              <Input type="email" className="form-control" id="exampleFormControlInput1" required="email" placeholder="name@Company.com" />
            </div>
            <div className="col-auto">
              <Input type="password" className="form-control" id="inputPassword2" placeholder="password" />
            </div>
            <div className="btnpass  col-auto mt-3">
              <Button type="submit" className="btn mb-3"  >Sign in</Button>
              <NavLink to="/passforgot" target="_blank" >Forgot Password</NavLink>
            </div>
          </p>
          <div>
            <hr className="mt-0" />
            <span>or</span><br/>
            <GoogleLogin
              clientId="1076738920061-bl9grp2jnm0hpmdte00q6pvld58u722v.apps.googleusercontent.com"
              buttonText="Login with Gmail"
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={'single_host_origin'}
            />,
          </div>

        </FormControl>
      </div>
    </>
  );
};

export default Login;