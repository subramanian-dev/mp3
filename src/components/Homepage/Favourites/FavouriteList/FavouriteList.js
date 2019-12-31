import React from 'react'
import {MDBBtn,MDBIcon} from 'mdbreact'

const FavouriteList=(props)=>{
return(
    <div>
        <ul>
        {
        props.title.map((t,index)=> <li key={index}><span>{t}</span> <MDBBtn color="danger" onClick={()=>props.remove(index)}><MDBIcon icon="times" /></MDBBtn></li>)
        }
        </ul>
    </div>
)
}

export default FavouriteList