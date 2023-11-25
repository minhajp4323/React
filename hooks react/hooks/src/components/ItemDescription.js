//functional component
import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
        <p>{name}</p>
        <p>{description}</p>
        <img src='https://picsum.photos/id/237/200/300' />
    </div>
  )
}

export default ItemDescription

//Class base component

// import React, { Component } from 'react'

// export default class ItemDescription extends Component {
//   render() {
//     const { name, description}= this.props;
//     return (
//         <div>
//             <p>{name}</p>
//             <p><i>{description}</i></p>
//         </div>
//       )
//   }
// }
