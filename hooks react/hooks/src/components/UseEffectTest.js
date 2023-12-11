import React, { useEffect } from 'react'

function UseEffectTest() {
  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(data=>data.json())
    .then(result=>console.log(result))
  },[])
}
export default UseEffectTest