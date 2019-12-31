import React, { useState } from 'react'
import { MDBModal,MDBModalBody,MDBModalFooter,MDBModalHeader ,MDBContainer,MDBBtn,MDBIcon } from "mdbreact";
import FavouriteList from './FavouriteList/FavouriteList'

const Favourites=(props)=>{

    const[model,setModel]=useState(false)
      

return(
    <MDBContainer>
        <MDBBtn color="pink" onClick={()=>setModel(!model)}  style={{'margin-top':'20px'}}><MDBIcon icon="heart" /></MDBBtn>
        <MDBModal isOpen={model} toggle={()=>setModel(!model)} side position="top-right">
          <MDBModalHeader toggle={()=>setModel(!model)}>Favourites</MDBModalHeader>
          <MDBModalBody>
           {(props.fav.length===0)?
           <div onClick={()=>setModel(!model)} style={{'padding':'10%',"cursor":'pointer'}}>Add Favourites</div>:
               <FavouriteList title={props.fav} remove={props.rem}/>
           }
          </MDBModalBody>
          <MDBModalFooter>
            {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
          </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
)
}

export default Favourites