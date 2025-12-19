import { useState } from "react";
import { submitContact } from "../services/api";
import "../styles/Home.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", city: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitContact(form);
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", mobile: "", city: "" });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Us</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input value={form.name} placeholder="Full Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input value={form.email} placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input value={form.mobile} placeholder="Mobile"
          onChange={e => setForm({ ...form, mobile: e.target.value })} />
        <input value={form.city} placeholder="City"
          onChange={e => setForm({ ...form, city: e.target.value })} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
