import React from "react";
import { UserContext, ChannelContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user=>{
            return(
              <ChannelContext.Consumer>
                {
                  channel=>{
                    return(
                      <p> {user} dfj{channel} </p>
                    )
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
