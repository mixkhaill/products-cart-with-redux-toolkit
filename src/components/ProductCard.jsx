import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item) => {
            return (
              <MDBCol
                key={item.id}
                size="12"
                md="6"
                lg="4"
                xl="3"
                className="mt-4"
              >
                <MDBCard>
                  <div className="ratio ratio-1x1 object-fit-cover">
                    <MDBCardImage
                      src={item.img}
                      position="top"
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText>{item.price} PLN</MDBCardText>
                    <MDBBtn onClick={() => dispatch(addToCart(item))}>
                      Add to Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
