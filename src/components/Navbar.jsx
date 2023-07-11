import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  dispatch(getCartTotal());

  return (
    <MDBNavbar className="bg-dark bg-gradient text-light">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-light">Tasty Meals</MDBNavbarBrand>
        <Link to="/">
          <span className="text-light">All Products</span>
        </Link>
        <MDBBtn color="danger">
          <Link to="/cart" style={{ color: "#fff" }}>
            Cart {totalQuantity}
          </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
