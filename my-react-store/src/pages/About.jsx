// import './About.css'

// function About() {
//     return (
//         <div>
//             <img src="" alt="" />
//             <h1>About Us</h1>
//             <p>We’re an art dispensary made for creators who want quality supplies without breaking the bank. Our small but passionate team of 10 operates out of California, and we’re steadily growing alongside the artists we serve. 

//             Got a project in mind? Contact us — we’ve got your back.
//             </p>

//         </div>
//     )

// }

// export default About

import { useState } from 'react'
import "./About.css";

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(true);

  function showEmailInfomation() {
    setIsEmailVisible(true)
  }

  function hideEmailInfomation() {
    setIsEmailVisible(false)
  }

  return (
    <div className="about">
      {/* Hero */}
      <header className="about-hero">
        <div className="about-hero__content">
          <p className="about-kicker">Barto’s Arts & Crafts</p>
          <h1>Supplies made for artists — priced for real life.</h1>
          <p className="about-subtitle">
            We’re an art dispensary built for creators who want quality tools without
            breaking the bank. Small team. Big love for the craft.
          </p>

          <div className="about-actions">
            <a className="about-btn primary" href="/catalog">Shop Catalog</a>
            <a className="about-btn secondary" href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="about-hero__art" aria-hidden="true">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="stroke"></div>
        </div>
      </header>

      {/* Values
      <section className="about-section">
        <h2>What we stand for</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Quality you can feel</h3>
            <p>Reliable supplies that show up smooth, bold, and consistent.</p>
          </div>

          <div className="about-card">
            <h3>Affordable by design</h3>
            <p>We keep pricing fair so you can keep creating more often.</p>
          </div>

          <div className="about-card">
            <h3>Creator-first support</h3>
            <p>Questions, recommendations, project ideas — we’re here for it.</p>
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="about-stats">
        <div className="stat">
          <span className="stat-num">10</span>
          <span className="stat-label">team members</span>
        </div>
        <div className="stat">
          <span className="stat-num">CA</span>
          <span className="stat-label">based & shipping out</span>
        </div>
        <div className="stat">
          <span className="stat-num">Over 10,000</span>
          <span className="stat-label">ideas supported</span>
        </div>
      </section>

      {/* Closing */}
      <section className="about-section about-cta">
        <h2>Got a project in mind?</h2>
        <p>
          Contact us — we’ll help you pick supplies, build a bundle, or find the right
          tools for the job.
        </p>
        <a className="about-btn primary" href="/contact">Let’s talk</a>
      </section>


        {
            isEmailVisible == true 
            ? <p className='text-primary fs-5'>stephtruitt8@gmail.com</p> 
            : <p className='text-info fs-5'>Click the button below to see my email address</p>
        }

        {/* <button class="btn btn-success">Hide my email / Show my email</button> */}

        <button class="btn btn-secondary me-3" onClick={hideEmailInfomation}>Hide my email</button>
        <button class="btn btn-primary" onClick={showEmailInfomation}>Show my email</button>

    </div>
  );
}

export default About;
