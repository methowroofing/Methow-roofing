export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          backgroundImage: "url('/images/methow-roof-hero.jpg')",
          backgroundSize: "cover",
          padding: "120px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Methow Roofing</h1>
        <p>Serving Winthrop, Chelan, Twisp & Mazama</p>
        <a href="tel:5097414990">
          <button style={{ padding: 15, fontSize: 18 }}>
            Call Now: 509-741-4990
          </button>
        </a>
      </div>

      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Request a Free Estimate</h2>
        <form
          action="mailto:methowroofing@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input placeholder="Name" required /><br /><br />
          <input placeholder="Phone" required /><br /><br />
          <textarea placeholder="Project details" required /><br /><br />
          <button type="submit">Send Request</button>
        </form>
      </section>

      <a
        href="tel:5097414990"
        style={{
          position: "fixed",
          bottom: 10,
          left: 10,
          right: 10,
          background: "#2563eb",
          color: "white",
          padding: 15,
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        Call Now: 509-741-4990
      </a>
    </div>
  );
}
