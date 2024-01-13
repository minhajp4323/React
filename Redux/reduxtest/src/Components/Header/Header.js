import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header>
        <div className='container'>
            <h1>Phone Store</h1>
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png' style={{width: "25px" }} />
        </div>
    </header>
  )
}

export default Header