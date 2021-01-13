import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
      />

      <div className="home__row">
        <Product
          id={12332}
          title={"Book: How to be Rich"}
          price={129.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91lx7ksfr1L.jpg"
        />
        <Product
          id={1545646}
          title={"Book: Become super Rich"}
          price={12.0}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/91lx7ksfr1L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={165643}
          title={"Book: Rich Quick"}
          price={15.0}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/91lx7ksfr1L.jpg"
        />
        <Product
          id={1656533}
          title={"Book: How to earn more money"}
          price={1.3}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91lx7ksfr1L.jpg"
        />
        <Product
          id={189898}
          title={"Book: How not to starve"}
          price={19.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91lx7ksfr1L.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
