// 5 rows
// 4 column
import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Container,
  // Button,
} from "reactstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log("ProductComponent", products)

  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col md={3} className="">
              <div>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={product.image}
                    alt={product.title}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardSubtitle tag="h6">$ {product.price}</CardSubtitle>
                    <CardText>
                      <div>
                        <h6>{product.category}</h6>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );

  // return <>{RenderList}</>;
};

export default ProductComponent;
