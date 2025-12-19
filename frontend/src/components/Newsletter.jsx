import { useState } from "react";
import { subscribeNewsletter } from "../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    subscribeNewsletter({ email });
    alert("Subscribed successfully");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2 className="section-title">Subscribe to our Newsletter</h2>
      <input
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </section>
  );
}
