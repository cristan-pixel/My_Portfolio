const ports = [
  { label: 'Gmail', value: 'baternacristan@gmail.com', href: 'mailto:hello@cristanaranez.dev' },
  { label: 'GitHub', value: '/cristanaranez', href: 'https://github.com/cristanaranez', external: true },
  { label: 'LinkedIn', value: '/in/cristanaranez', href: 'https://www.linkedin.com/in/cristanaranez', external: true },
  { label: 'Facebook', value: '/cristanaranez', href: 'https://www.facebook.com/cristanaranez', external: true },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-cta reveal">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Output Ports</p>
          <h2>Let&apos;s build something together.</h2>
          <p>Open to OJT placements, internships, and entry-level opportunities. Fastest reply is by email.</p>
          <a className="btn btn-primary" href="mailto:hello@cristanaranez.dev">Send an Email</a>
        </div>

        <div className="ports reveal">
          {ports.map((port) => (
            <a
              className="port"
              href={port.href}
              key={port.label}
              {...(port.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="label">{port.label}</div>
              <div className="value">{port.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
