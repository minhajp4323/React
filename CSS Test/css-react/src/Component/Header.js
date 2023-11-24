import React from 'react';
import HeaderCss from "./Header.module.css"


// ------------------for variavle css--------------------
// const Header = () => {
//     const headingStyle= {color: "blue"};  variable css
//   return (
//     <div>
//         <h1 style={headingStyle}>Component</h1>
//     </div>
//   )
// }

const Header = () => {
     
  return (
    <div className={HeaderCss.hdr}>
        <h1 className='hdr'>Component</h1>
        <p className='para'>this is a paragraph</p>
    </div>
  )
}
export default Header