import React from 'react'

function UseEffectTest() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(data=>data.json())
    .then(res=>console.log(res.title))
  return (
    <div>UseEffectTest</div>
  )
}

export default UseEffectTest