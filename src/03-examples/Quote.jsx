import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({cita, autor}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width:0, height:0 });

  useLayoutEffect(()=>{
    // console.log(pRef.current.getBoundingClientRect());
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize(width, height);
  },[cita]);


  return (
    <>
      <blockquote className="blockquote text-end" style={{ display:'flex' }}>
        <p ref={ pRef } className="mb-1">{ cita }</p>
        <footer className="blockquote-footer">{ autor }</footer>
      </blockquote>

      <code>
        { JSON.stringify(boxSize) }
      </code>

    </>
  )
}
