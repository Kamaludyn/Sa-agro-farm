import logo from "../assets/images/logo/sa-farm-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <div className="logo-container">
            <img className="logo ft-logo" src={logo} alt="Logo" />
          </div>
          <div>
            <h3>Business Address:</h3>
            <p>No. 4 Sabon Fegi Badirisa, Girei LGA, Adamawa State</p>
            <p>Phone: 08085459152, 09068063113</p>
          </div>
        </div>
        <div className="subs-input">
          <label htmlFor="subscribe">Subscribe</label>
          <input type="text" />
          <button>submit</button>
          <hr />
        </div>
      </div>
      <p className="copyright">© 2024 SANJARIL AGRICULTURAL FARM </p>
      <h3 className="top">
        <a href="/#hero">BACK TO TOP</a>
      </h3>
      <p className="signature">Build by Kamaludeen Abubakar</p>
    </footer>
  );
};

export default Footer;
