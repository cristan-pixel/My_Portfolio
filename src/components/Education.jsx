const items = [
  {
    title: 'BS Computer Science',
    dates: '2024 — Present',
    org: 'Tangub City Global College',
    desc: 'Coursework in data structures, databases, and software engineering — applying each new concept to a real, working project instead of leaving it in the notebook.',
  },
  {
    title: 'Student Developer',
    dates: '2024 — Present',
    org: 'Self-Directed Projects',
    desc: 'Designed and built FoodHub, Daily Task Reminder, and the Gym Management System solo — handling planning, database design, front-end, and back-end for each.',
  },
  {
    title: 'Still Learning',
    dates: 'Available Now',
    org: '3rd Year, BS Computer Science',
    desc: "Every project so far has been a way to stress-test what I'm learning in class — there's a lot I still don't know, and that's the point. Each system I build teaches me something the syllabus doesn't.",
  },
]

export default function Education() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">System Bus</p>
          <h2>Education &amp; Journey</h2>
        </div>

        <div className="bus reveal">
          {items.map((item) => (
            <div className="bus-item" key={item.title}>
              <div className="bus-meta">
                <h3>{item.title}</h3>
                <span className="bus-dates mono">{item.dates}</span>
              </div>
              <div className="bus-org">{item.org}</div>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
