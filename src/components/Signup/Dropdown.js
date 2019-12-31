import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const Dropdown = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        preffered language
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Tamil</MDBDropdownItem>
        <MDBDropdownItem>English</MDBDropdownItem>
        <MDBDropdownItem>Hindi</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default Dropdown;