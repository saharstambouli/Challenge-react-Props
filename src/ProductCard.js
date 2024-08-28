import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({product}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" height="250px" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ height: "20rem" }}>
          {product.description}
        </Card.Text>
        <Button variant="primary">{product.price}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
