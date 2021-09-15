import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products[0]);
  const { id, title } = products;


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 m-1">
          <div>
            <Card>
            <CardImg top width="100%"/>
            <CardBody>
              <CardText><h6>{title}</h6></CardText>
            </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
