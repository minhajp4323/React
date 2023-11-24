import React from "react";
import Child from "./Child";
import homeCss from "./Home.module.css"
import btnCss from "./Button.module.css"

const Home =()=>{
    return(
        <div className={homeCss.homediv}>
            <h1>Home</h1>
            <Child />
            <button className={btnCss.loginBtn} type="">Log In</button>
            <button className= {btnCss.logoutBtn} type="">Log out</button>
        </div>
    )
}


  
 export default Home