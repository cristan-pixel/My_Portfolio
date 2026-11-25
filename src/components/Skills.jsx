const sockets = [
  { id: 'A', title: 'Languages', skills: ['Java', 'JavaScript', 'PHP', 'Python', 'SQL'] },
  { id: 'B', title: 'Frontend', skills: ['HTML5 / CSS3', 'React', 'Bootstrap', 'Figma'] },
  { id: 'C', title: 'Backend & Data', skills: ['Node.js', 'PHP', 'MySQL', 'Firebase'] },
  { id: 'D', title: 'Tools', skills: ['Git & GitHub', 'Android Studio', 'XAMPP', 'Postman'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Component Library</p>
          <h2>Skills</h2>
        </div>

        <div className="reveal">
          {sockets.map((socket) => (
            <div className="socket" key={socket.id}>
              <div className="socket-head">
                <span className="idx">Socket {socket.id}</span> {socket.title}
              </div>
              <div className="chip-row">
                {socket.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
