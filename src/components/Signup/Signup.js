import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Dropdown from './Dropdown'

const FormPage = (props) => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const submitHandle=(event)=>{
        event.preventDefault()
        localStorage.setItem(name,JSON.stringify({
            'Name':name,
            "Email":email,
            "Pass":pass
        }))
        props.history.push('/')
    }

  return (
    <MDBContainer>
      <MDBRow className="vh-100">
      <MDBCol md="3"/>
        <MDBCol md="6"  style={{'margin':'auto'}}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={submitHandle}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e=>setName(e.target.value)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e=>setEmail(e.target.value)}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={e=>setPass(e.target.value)}
                  />
                 <Dropdown/>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
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