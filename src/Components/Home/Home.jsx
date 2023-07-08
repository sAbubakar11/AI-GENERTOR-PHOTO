import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Packages from "./Packages";

function Home() {
  return (
    <div>
      <Carousel
        style={{
          padding: "2rem 10rem 10rem 10rem",
          margin: "2rem",
          marginTop: "2rem",
          display: "flex",
        }}
      >
        <Carousel.Item style={{ padding: "-10rem", margin: "-10rem" }}>
          <img
            className="d-block w-100"
            src="https://www.holidify.com/images/bgImages/MANALI.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hungrytourer.com/wp-content/uploads/2023/01/Historical-Places-in-India-1200x640.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/07/How-to-Plan-Family-Friendly-Hioliday-Trip-to-Rajasthan.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Packages />
    </div>
  );
}

export default Home;
