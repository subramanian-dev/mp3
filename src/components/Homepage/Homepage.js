import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { MDBInput,MDBCol,MDBRow,MDBContainer,MDBBtn,MDBIcon } from "mdbreact";
import Card from '../Card/Card'
import Favourites from './Favourites/Favourites'
import './Homepage.css'

const Homepage=(props)=>{
    const[album,setAlbum]=useState("");
    const [albumList,setList]=useState(null)
    const[favour,setFavour]=useState([])

    useEffect(() => {
       if(localStorage.getItem("current")===null){
         props.history.push('/')
       }
      }, [])

  const handleClick=()=>{
        axios(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${album}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "e9ace29deamsh10432afa5590399p1f269fjsnb9a23a8fe17d"
	}
})
.then(response => {
    setList(response.data.data)
})
.catch(err => {
	console.log(err);
});
    }


const addFav=(title)=>{
    let fav =[...favour]
    fav.push(title)
    setFavour(fav)
}

const remFav=(i)=>{
    let fav =[...favour]
    fav.splice(i,1)
    setFavour(fav)
}

const signout=()=>{
    localStorage.removeItem("current")
    props.history.push('/')
}

return (
    <div className="min-vh-100 Homepage">
        <MDBContainer>
      <MDBRow>
          <MDBCol md="3"/>
        <MDBCol md="3">
        <MDBInput label="Search for music" size="lg" onChange={e=>setAlbum(e.target.value)} />
        </MDBCol>
        <MDBCol md="3">
        <MDBBtn color="primary" style={{'margin-top':'20px'}} onClick={()=>handleClick()}><MDBIcon icon="search" /></MDBBtn>
        </MDBCol>
<MDBCol md="3">
    <MDBRow>
<MDBCol md="6">
    <Favourites fav={favour} rem={remFav}/>

</MDBCol>
<MDBCol md="6">

<MDBBtn  color="primary" style={{'margin-top':'20px'}} onClick={()=>signout()}><MDBIcon icon="sign-out-alt" /></MDBBtn>
</MDBCol>
    </MDBRow>
</MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol md="12" style={{'display':'flex','flexWrap':'wrap'}}>
        {
            (albumList!==null)?
            albumList.map((album,index)=>{
               return <Card key={index} title={album.title_short} artist={album.artist.name} pic={album.album.cover_big} fav={addFav} preview={album.preview}/>
            }):null
}
      </MDBCol>
      </MDBRow>
      <scroll-to-top-btn></scroll-to-top-btn>
    </MDBContainer>
    </div>
)
}

export default Homepage