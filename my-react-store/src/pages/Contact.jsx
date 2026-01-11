// import './Contact.css'

// function Contact() {
//     return (
//         <div>
//             <img src="" alt="" />
//             <h1>How to reach us</h1>
//             <p>We’re an art dispensary made for creators who want quality supplies without breaking the bank. Our small but passionate team of 10 operates out of California, and we’re steadily growing alongside the artists we serve. 

//             Got a project in mind? Contact us — we’ve got your back.
//             </p>

//         </div>
//     )

// }

// export default Contact

import "./Contact.css";

function Contact() {
  return (
    <main className="contact">
      {/* Header */}
      <section className="contact-header">
        <p className="contact-kicker">Get in touch</p>
        <h1>Let’s talk about your next project</h1>
        <p className="contact-intro">
          Whether you’re planning something big or just need help picking
          supplies, we’re happy to hear from you.
        </p>
      </section>

      {/* Content */}
      <section className="contact-content">
        {/* Info card */}
        <div className="contact-card">
          <h3>Contact details</h3>

          <div className="contact-item">
            <span>Email</span>
            <p>hello@bartosartcrafts.com</p>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>California, USA</p>
          </div>

          <div className="contact-item">
            <span>Hours</span>
            <p>Mon – Fri · 9am – 5pm</p>
          </div>

          <div className="contact-note">
            We usually reply within 1 business day.
          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <h3>Send us a message</h3>

          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@email.com" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Tell us a bit about what you’re working on..."
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send message
          </button>
        </form>
      </section>

      {/* Footer note */}
      <section className="contact-footer">
        <p>
          Prefer social? You can also reach us on Instagram or Twitter.
        </p>
      </section>
    </main>
  );
}

export default Contact;
