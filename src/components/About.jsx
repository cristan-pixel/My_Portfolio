const dieCells = Array.from({ length: 36 })

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Datasheet 01</p>
          <h2>About</h2>
        </div>

        <div className="datasheet reveal">
          <div className="datasheet-visual">
            <div className="die">
              {dieCells.map((_, i) => <span key={i}></span>)}
            </div>
            <div className="profile-mount">
              <div className="profile-frame">
                <span className="tick top"></span>
                <span className="tick bottom"></span>
                <span className="tick left"></span>
                <span className="tick right"></span>
                <img src="/cris.jpg" alt="Portrait of Cristan A. Arañez" />
              </div>
              <span className="profile-caption mono">Unit&nbsp;01 // Portrait</span>
            </div>
          </div>

          <div className="about-copy">
            <table className="spec-table">
              <tbody>
                <tr><td>Student ID</td><td>244944</td></tr>
                <tr><td>Package</td><td>Tangub City Global College</td></tr>
                <tr><td>Function</td><td>Full-stack app development (student)</td></tr>
                <tr><td>Standing</td><td>3rd Year, BS Computer Science</td></tr>
              </tbody>
            </table>
            <p>
              <strong>I&apos;m still a student, but I don&apos;t like learning from slides alone.</strong>{' '}
              Every concept I pick up in class &mdash; databases, APIs, user authentication &mdash; I try
              to put into an actual working system as soon as I can.
            </p>
            <p>
              So far that&apos;s meant building <strong>FoodHub</strong>, a food delivery platform, a{' '}
              <strong>Daily Task Reminder</strong> app that tracks steps, distance, and calories, and a{' '}
              <strong>Gym Management System</strong> that handles member payments and records. None of them
              are perfect, but each one taught me something the classroom couldn&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
