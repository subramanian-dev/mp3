import React,{useState,useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";

const FormPage = (props) => {

    useEffect(() => {
       if(localStorage.getItem("current")!==null){
         props.history.push('/homepage')
       }
      }, [])
 
    const [name,setName]=useState("")
    const [pass,setPass]=useState("")
    const handleSubmit=(event)=>{
        event.preventDefault()
        const userDetails=JSON.parse(localStorage.getItem(name))
        console.log(userDetails)
        if(userDetails.Pass===pass){
            console.log("correct");
            localStorage.setItem("current",JSON.stringify(userDetails))
            props.history.push('/homepage')
        }
    }

  return (
    <MDBContainer>
      <MDBRow className="vh-100">
          <MDBCol md="3"/>
        <MDBCol md="6" style={{'margin':'auto'}}>
          <MDBCard>
            <MDBCardBody> 
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Log in</p>
                <MDBInput
                    label="User name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e=>setName(e.target.value)}
                  />
                <br />
                <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={e=>setPass(e.target.value)}
                  />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Log in
                  </MDBBtn>
                  <br/>
                  <Link to='/signup'>create account?</Link>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3"/>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;