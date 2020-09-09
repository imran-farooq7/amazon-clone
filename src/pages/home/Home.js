import React from "react";
import "./home.css";
import Product from "../../components/product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
          className="home__banner"
        />
        <div className="home__row">
          <Product
            title="Ultimate Ears WONDERBOOM Portable Waterproof Bluetooth Speaker - Phantom Black"
            price="32.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51RDhXlnSAL._AC_US160_.jpg"
            rating={4}
          />
          <Product
            title="SanDisk 256GB Ultra Dual Drive M3.0 for Android Devices and Computers - MicroUSB, USB 3.0 - SDDD3-256G-G46,Black"
            price="33.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41W9koKqmDL._AC_SY400_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Pyrex Glass Measuring Cup Set (3-Piece, Microwave and Oven Safe),Clear"
            price="17.99"
            image="https://images-na.ssl-images-amazon.com/images/I/410YzK6cfAL._AC_US218_.jpg"
            rating={5}
          />
          <Product
            title="Brita Standard Replacement Filters for Pitchers and Dispensers, 4ct, White"
            price="17.99"
            image="https://images-na.ssl-images-amazon.com/images/I/31HulTaonOL._AC_US218_.jpg"
            rating={4}
          />
          <Product
            title="Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 10 Oz. Brew Sizes, Black"
            price="79.00"
            image="https://images-na.ssl-images-amazon.com/images/I/41zR9OmibVL._AC_US218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="HP 15-Inch FHD Laptop, 10th Gen Intel Core i5-1035G1, 8 GB RAM, 256 GB Solid-State Drive, Windows 10 Home (15-dy1036nr, Natural Silver)"
            price="599.00"
            image="https://images-na.ssl-images-amazon.com/images/I/71WSt8D7KFL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
