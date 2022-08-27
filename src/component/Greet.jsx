import React from 'react'
const Greet=(props)=>{
  console.log(props)
  return <h2>Hello {props.name}</h2>
}
export default Greet