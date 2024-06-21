import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductAndServices from "./components/ProductAndServices";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <ProductAndServices />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
