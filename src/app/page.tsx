import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Expreience from "./components/exprerience/Expreience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expreience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
