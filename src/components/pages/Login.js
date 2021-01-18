import React, { useState } from "react";
// import Sitefooter from "../Footers/Sitefooter";
import { Redirect } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// //import { Container } from "@material-ui/core";
// import Container from "@material-ui/core/Container";
// import { useForm } from "react-hook-form";
import "./Login.css";
// import axios from "axios";
// const config = require("../../config.json");



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
  
// }));
let tokenTimer;

const ovtTime = localStorage.getItem("ovt_user_time");
if (new Date().getTime() > Number(ovtTime)) {
  // logout();
} else {
  const userDetail = JSON.parse(localStorage.getItem("ovt_user"));
  if (!userDetail) {
    // clearTimeout(tokenTimer);
    console.log("no user logged in");
  } else {
    // console.log(userDetail.user.role);
    clearTimeout(tokenTimer);
    setAuthTimer(Number(ovtTime) - new Date().getTime());
     //setAuthTimer(3600000);

    // if (userDetail.user.role === "user") {
    //   window.location = config.subfolder + "/user/dashboard";
    // } else if (userDetail.user.role === "admin") {
    //   window.location = config.subfolder + "/admin/dashboard";
    // }
  }
}

function setAuthTimer(duration) {
  // console.log(duration);
  tokenTimer = setTimeout(() => {
    logout();
  }, duration);
}
function logout() {
  localStorage.removeItem("ovt_user");
  localStorage.removeItem("ovt_user_time");
  localStorage.removeItem("paypal_storage");
  clearTimeout(tokenTimer);
//   window.location = config.subfolder + "/signin";
}

function Login() {
  let form_data = {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
//   const { register, handleSubmit, errors } = useForm();
//   const classes = useStyles();

  const [disabled,setDisabled] = useState(false);


  function clickdis (){
     setDisabled(!disabled);
  }

  const onSubmit = (data) => {
    form_data = {
      emailPhone: email,
      password: password,
    };
    // console.log(form_data);
    // axios
    //   .post("https://online-virtual-tax-new1.herokuapp.com/api/v1/auth/login", form_data)
    //   .then((res) => {
    //     // console.log("Sign in Response");
    //     // console.log(res.data);
    //     if (res.data.success === false && res.data.message === "Invalid Email/Phone Number or Password") {
    //       // console.log("User Verification failed");
    //       alert("Invalid login credentials, Please Try Again.")
        
    //     }else if(res.data.success === false && res.data.message === "User acess has been denied by ADMIN"){
    //       alert(res.data.message);
    //     }
    //      else {
    //       clickdis();
    //       document.getElementById("otpbox").style.display = "block";
    //     }
    //   });
  };
  return (
    <div class="loginbody"style={{height:'80vh'}}>
    <form class='login-form2'>
  <div class="flex-row">
    <label class="lf--label" for="username" style={{height:'50px',marginTop:'2.5%'}}>
      <svg x="0px" y="0px" width="12px" height="13px" >
         
        <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>
       
      </svg>
    </label>
    <input id="username" class='lf--input user1' placeholder='Username' type='email' style={{borderRadius:'0px',padding:'5.3% 0px',paddingLeft:'3%'}}/>
  
  {/* <label class="lf--label" for="password">
      <svg x="0px" y="0px" width="15px" height="5px">
        <g>
          <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
        </g>
      </svg>
    </label>
    <input id="password" class='lf--input' placeholder='Username' type='password'/>
      */}
  </div>
  <div class="flex-row"> 
    <label class="lf--label" for="password">
      <svg x="0px" y="0px" width="15px" height="5px">
        <g>
          <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
        </g>
      </svg>
    </label>
    <input id="password" class='lf--input' placeholder='Password' type='password'/>
  </div>
  <input class='lf--submit' type='submit' value='LOGIN'/>
</form>
<a class='lf--forgot' href='#'>Forgot password?</a>
</div>
  );
}

export default Login