import React from "react";
import { ChannelContext, UserContext } from "../../App";
import { useContext } from "react";

function ComponentsC() {

    const user= useContext(UserContext)
    const channel= useContext(ChannelContext)
  return (
    <div>
        <h1>{user} {channel} </h1>
    </div>
    

    // <div>
    //   <UserContext.Consumer>
    //     {(user) => {
    //       return (
    //         <div>
    //           <ChannelContext.Consumer>
    //             {(channel) => {
    //               return (
    //                 <div>
    //                   <h1>
    //                     {user} {channel}
    //                   </h1>
    //                 </div>
    //               );
    //             }}
    //           </ChannelContext.Consumer>
    //         </div>
    //       );
    //     }}
    //   </UserContext.Consumer>
    // </div>
  );
}

export default ComponentsC;
