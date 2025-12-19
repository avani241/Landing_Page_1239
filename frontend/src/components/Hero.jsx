import "../styles/Home.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Consultation,<br />Design<br />& Marketing
        </h1>
        <p>We offer a range of digital services designed to help your business thrive in today's fast-paced, competitive environment</p>
        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-form">
        <h3>Get a Free Consultation</h3>
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
        <input placeholder="Mobile Number" />
        <button>Submit</button>
      </div>
    </section>
  );
}
