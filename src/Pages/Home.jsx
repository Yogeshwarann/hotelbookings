import React from "react";
// import react-router-dom
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
// imports components
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";

function Home() {
  return (
    <>2
      <Hero>
        <Banner
          title="Premium rooms"
          subtitle="luxurious  rooms starting at ₹2999"
        >
          <Link to="/rooms" className="btn-primary">
            visit our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
