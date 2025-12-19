import "../styles/Home.css";
import { subscribeNewsletter } from "../services/api";

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = async () => {
    const email = document.getElementById("navEmail").value;
    if (!email) return alert("Enter email first");
    await subscribeNewsletter({ email });
    alert("Subscribed successfully");
    document.getElementById("navEmail").value = "";
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <span onClick={() => scrollTo("hero")}>Home</span>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("clients")}>Testimonials</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </div>

      <div className="nav-right">
        <input id="navEmail" placeholder="Enter Email Address" />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </header>
  );
}
