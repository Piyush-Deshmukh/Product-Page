import { Col, Row, Card, Container } from "react-bootstrap"

const Cards = ({ products }) => {
  return (
    <Container className="products-container">
      <Row className="products justify-content-md-center overflow-hidden pt-5" >
          {products.map((item) => {
              return (
                  <Col key={item.id} xs={6} md={4} >
                    <Card className="product-card shadow p-3 mb-5 bg-white rounded">
                      <Card.Img variant="top" src={item.thumbnail} alt={item.title} style={{ height: '20rem' }} />
                      <Card.Body>
                        <Card.Title className="fs-5 mb-2" style={{ fontWeight: 600 }}>
                          {item.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2">${item.price}</Card.Subtitle>
                        <Card.Text className="mb-2">{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
              )
          })}
      </Row>
    </Container>
  )
}
export default Cards