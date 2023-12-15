import React from 'react'

function Button({ handleCLick, children} ) {
    console.log( `rendering Button ${children}`);
  return (
    <div>
        <button onClick={handleCLick} >{children}</button>
    </div>
  )
}

export default Button