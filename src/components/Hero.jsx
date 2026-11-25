const PER_SIDE = 5
const legPositions = Array.from({ length: PER_SIDE }, (_, i) => 12 + i * (76 / (PER_SIDE - 1)))

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Portfolio // Board Rev 2.0</p>
          <h1>
            Building apps <span className="accent">that solve everyday problems.</span>
          </h1>
          <p className="lede">
            Computer Science student who learns by shipping. I build full working systems &mdash; from
            food ordering to fitness tracking to gym management &mdash; to turn classroom concepts into
            things people can actually use.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Get In Touch</a>
          </div>
          <div className="pin-strip">
            <span className="pin">BS Computer Science</span>
            <span className="pin">Open to OJT / Internship</span>
            <span className="pin">3 Systems Built</span>
          </div>
        </div>

        <div className="ic-wrap reveal">
          <img
            src="/profile_wholebody.png"
            alt="Full-body portrait of Cristan A. Arañez"
            className="hero-photo"
          />
          <div className="ic">
            <div className="ic-legs" id="ic-legs">
              {legPositions.flatMap((pct) => [
                <span key={`t-${pct}`} className="leg-h" style={{ top: '-3px', left: `${pct}%` }} />,
                <span key={`b-${pct}`} className="leg-h" style={{ bottom: '-3px', left: `${pct}%` }} />,
                <span key={`l-${pct}`} className="leg-v" style={{ left: '-3px', top: `${pct}%` }} />,
                <span key={`r-${pct}`} className="leg-v" style={{ right: '-3px', top: `${pct}%` }} />,
              ])}
            </div>
            <div className="ic-label">
              <div className="name">C. ARAÑEZ</div>
              <div className="role">CS Student &amp; Developer</div>
              <div className="code mono">U1 // REV.2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
