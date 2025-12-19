import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <About />
      <Projects />
      <Clients />
      <ContactForm />
      <Newsletter />
      <Footer />
    </>
  );
}
