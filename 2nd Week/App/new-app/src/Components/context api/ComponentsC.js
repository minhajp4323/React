import React from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentsC() {
  return (
      <UserContext.Consumer>
        {
            user=>{
                return(
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return(
                                    <div>
                                        <h1>{user} {channel} </h1>
                                    </div>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                )
            }
        }
      </UserContext.Consumer>
  );
}

export default ComponentsC;
