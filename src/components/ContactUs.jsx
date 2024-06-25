import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <a href="https://web.facebook.com/KingKamaludeen305/">
        <FaFacebookF className="icon" />
      </a>
      <a href="https://www.instagram.com/kaydheen" target="_blank">
        <FaInstagram className="icon" />
      </a>
      <a href="tel:+2348120657960" target="_blank">
        <FaPhone className="icon" />
      </a>
      <a
        href="mailto:Kamaludeen305@gmail.com?subject=Subject&body=Body%20text"
        target="_blank"
      >
        <FaEnvelope className="icon" />
      </a>
    </section>
  );
};

export default ContactUs;
