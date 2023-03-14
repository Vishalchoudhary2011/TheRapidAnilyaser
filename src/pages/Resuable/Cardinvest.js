import React from 'react'
import { Link } from "react-router-dom";

export default function Cardinvest(props) {
  return (
    <div className='tradesection' >
    <div className="ct-fancybox-icon bg-gradient preset2"> 
    <Link className="more-overlay animate pulse animated infinite" href="#" target="_self"> <i className={props.iconimg}></i> </Link></div>
    <h5>{props.title}</h5>
    <p>{props.content}</p>
   </div>
  )
}




