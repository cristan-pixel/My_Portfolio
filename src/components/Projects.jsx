const projects = [
  {
    title: 'FoodHub',
    rev: 'V1.0',
    description:
      'A food delivery system that connects customers with local restaurants — browse menus, add items to cart, check out, and track an order from kitchen to doorstep.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    href: '#',
  },
  {
    title: 'Daily Task Reminder',
    rev: 'V1.0',
    description:
      "A personal productivity app that keeps a person's day on track — task reminders alongside a built-in step tracker that logs distance in kilometers and calories burned.",
    tags: ['Java', 'Android Studio', 'SQLite', 'Sensor API'],
    href: '#',
  },
  {
    title: 'Gym Management System',
    rev: 'V1.0',
    description:
      "An admin system for gyms that manages member records and payments in one place — tracking subscriptions, renewals, and who's paid for the month.",
    tags: ['PHP', 'MySQL', 'HTML / CSS', 'Admin Dashboard'],
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Module Rack</p>
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="chip-card reveal" key={project.title}>
              <div className="project-head">
                <h3>{project.title}</h3>
                <span className="rev-tag">{project.rev}</span>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="io-row">
                {project.tags.map((tag) => (
                  <span className="io-pin" key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.href}>
                View project <span className="arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
