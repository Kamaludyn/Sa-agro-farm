import vegetation from "../assets/images/about/VEGETATION.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div id="ourVision" className="about-card overlay">
        <h2>Our Vision</h2>
        <p>
          SANJARIL AGRICULTURAL FARM was founded with a vision to be a leading
          provider of quality agro commodities, aggregator, logistics services
          and agricultural equipments. <br />
          Sanjaril Agricultural Farm plays a critical role in the agribusiness
          industry, serving as a bridge between farmers and end-users. The
          company sources agro- commodities like grains, seeds, nuts from local
          farmers directly. We clean commodities to specification. We also
          provide storage facilities for raw and processed products by setting
          up several aggregating storage facilities across the country, allowing
          us to supply all year round. The company facilitates the
          transportation of goods working with its organized network in Nigeria.
          We add value to competitive agricultural products.
        </p>
      </div>
      <div id="ourMission" className="about-card mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide our clients with the best quality products
          while also unlocking the country's agricultural potential. Reducing
          post harvest losses and ensuring food security and environmental
          sustainability through value addition to products.
        </p>
      </div>
      <div id="ourValues" className="about-card overlay">
        <h2>Our Core Values</h2>
        <p>
          We build long lasting quality relationships. We work in teams to
          achieve our goals. We are accountable at every point of our service
          delivery. We make sure we deliver to specification and on time.
        </p>
      </div>
    </section>
  );
};

export default About;
