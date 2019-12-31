import React, { useState } from 'react';
import { MDBIcon, MDBCol,MDBBtn } from 'mdbreact';

const Card = (props) => {
  const[play,setPlay]=useState(true);
  const[music,setMusic]=useState("");
  
  const startOrstopAudio=()=>{
    setPlay(!play)
  }
  let title=""
  if(props.title.length>12)
   title=`${props.title.substring(0,13)}...`
   else
   title=props.title

  return (
    <MDBCol md="4" style={{'padding':'10px'}}>
    <div className="card card-cascade">

    <div className="view view-cascade">
      <img src={props.pic} className="card-img-top" alt=""/>
      <a>
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    <div className="card-body card-body-cascade text-center">
  <h4 className="card-title"><strong>{ title }</strong></h4>
  <h5>{props.artist}</h5>

      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex,
        recusandae. Facere modi
        sunt, quod quibusdam.
      </p>
      {
        (play)?
      <MDBBtn color="primary" onClick={()=>startOrstopAudio()}>
      <MDBIcon icon="play"/>
      </MDBBtn>
      :
      <MDBBtn color="primary" onClick={()=>startOrstopAudio()}>
      <MDBIcon icon="pause"/>
      </MDBBtn>
      }
      <MDBBtn color="pink" onClick={()=>props.fav(props.title)}>
      <MDBIcon icon="heart"/>
      </MDBBtn>
      {
        (!play)?
      <audio
        controls autoPlay
        src={props.preview}>
    </audio>:null
      }

    </div>

  </div>
 </MDBCol>
  )
}

export default Card;