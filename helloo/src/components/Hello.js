import React, { createElement } from "react";

const Hello= ()=>{
    // return (
    //     <div>
    //         <h1>Hello Minhaj</h1>
    //     </div>
    // )
    return  React.createElement("div", null, React.createElement("h1",{id:"hello", className: "dummyHello"}, "Hello Minhaj"))

}

export default Hello;