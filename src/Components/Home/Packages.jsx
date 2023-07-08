import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function Packages() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://goadarling.com/wp-content/uploads/2022/05/1.jpg"
          />
          <Card.Body>
            <Card.Title>Family Packages</Card.Title>
            <Card.Text>
              This is a wider family Packages $1000 with supporting text below
              as a natural lead-in to additional content. This content is a
              little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">More </Button>{" "}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRW3Zb25Eu_mXsd_spiMrdT56MM4o8_DVJQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Couple Package</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">More </Button>{" "}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.thomascook.in/blog/wp-content/uploads/2023/04/solo-traveller.jpg"
          />
          <Card.Body>
            <Card.Title>Solo Packages</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">More </Button>{" "}
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default Packages;
