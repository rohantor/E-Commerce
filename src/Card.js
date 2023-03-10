import React from "react";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import ModalTest from "./ModalTest";
export default function Card(props) {
  const { title, url, description, id } = props.Product;
  const [deleteStatus, setDeletestatus] = React.useState(
    props.Product.deleteStatus
  );
  const [modalPos, setModalPos] = React.useState(false);

  return (
    <>
      <div className="card_outer">
        <div>
          <h3 className="title" style={{ display: "inline-block" }}>
            {id}
            <br />
            {title}
          </h3>

          
            
            <img
              src="/trash.png"
              alt=""
              onClick={() => {
                setDeletestatus(!deleteStatus);
                console.log("Delete");
              }}
              style={{ display: "inline-block", heigth: "16px"}}
            />
           
        </div>
        {/* <Modal Product ={props.Product}/> */}
        <img
          src={url}
          onClick={() => {
            setModalPos((old) => !old);
          }}
          className="Card_img"
        />
        {deleteStatus ? (
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              props.Product.setRemoved((old) => [...old, id]);
              console.log("Deleted");
            }}
          >
            Delete
          </Button>
        ) : (
          <>
            <Button variant="contained">WishList</Button>
            <Button variant="outlined">Add to cart</Button>
          </>
        )}

        <p>{description}</p>
      </div>
      <ModalTest
        isClose={modalPos}
        setModalPos={setModalPos}
        Product={props.Product}
      ></ModalTest>
    </>
  );
}
