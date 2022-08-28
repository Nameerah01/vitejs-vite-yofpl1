import React,{useState,useEffect} from 'react'
function HookMouse(){
  const [x,setX]=useState(0)
  const [y,setY]=useState(0)
  const logMousePoint=()=>{
    setX(x=clientX),
    setY(y=clientY)
  }
  useEffect(()=>{
    window.addEventListener('mousemove',logMousePoint)
  })
  return(
    <div>
    <div>
      X-{x}
    </div>
    <div>
      Y-{y}
      </div>
      </div>
  )
}
export default HookMouse