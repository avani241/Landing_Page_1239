import "../styles/Home.css";

export default function WhyChoose() {
  return (
    <section className="why">
      <h2 className="section-title">Why Choose Us?</h2>

      <div className="why-grid">
        <div className="why-card">
          <h4>Potential ROI</h4>
          <p>We don't just create beautiful visuals; we build conversion-optimized user experiences. Our design philosophy centers on reducing friction in the customer journey to maximize your marketing ROI</p>
        </div>
        <div className="why-card">
          <h4>Design</h4>
          <p>Most firms offer design or marketing in isolation. We provide a consultation-first approach that ensures every creative asset and campaign is rooted in deep business strategy and 2025 market data.</p>
        </div>
        <div className="why-card">
          <h4>Marketing</h4>
          <p>We move beyond "one-off" tactics to build sustainable marketing engines. In 2025, consistency beats perfection—we establish clear systems that keep your brand visible and authoritative even when you're busy.</p>
        </div>
      </div>
    </section>
  );
}
