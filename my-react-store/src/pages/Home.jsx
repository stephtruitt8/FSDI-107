// import './home.css'

// function Home() {
//     return (
//         <div class="text-center bg-light">
//             <h1>Welcome to the art shop</h1>
//             <p className=''>Creative supplies right at your door</p>
//             <img width={"700"} src="https://images.unsplash.com/photo-1669725830529-f43fc0b5736b?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         </div>
//     )

// }

// export default Home

import "./Home.css";

function Home() {
  return (
    <main className="home">
      {/* Welcome Section */}
      <section className="home-welcome">
        <div className="home-welcome__text">
          <h1>
            Welcome to <span>Barto’s Arts & Crafts</span>
          </h1>
          <p className>
            Creative supplies made for artists, students, and makers seeking thoughtfully curated, high-quality tools—without the overwhelm of endless choices.
          </p>

          <div className="home-welcome__actions">
            <a href="/catalog" className="home-btn primary">
              Browse Supplies
            </a>
            <a href="/about" className="home-btn secondary">
              Our Story
            </a>
          </div>
        </div>

        <div className="home-welcome__image">
          <img
            src="https://images.unsplash.com/photo-1669725830529-f43fc0b5736b?q=80&w=1113&auto=format&fit=crop"
            alt="Art supplies and creative workspace"
          />
        </div>
      </section>

      {/* What we do */}
      <section className="home-strip">
        <p>
          Thoughtfully curated art supplies · Fair pricing · Friendly creator
          support
        </p>
      </section>

      {/* Features */}
      <section className="home-features">
        <div className="feature">
          <h3>Curated essentials</h3>
          <p>
            No clutter. Just tools artists actually use and love.
          </p>
        </div>

        <div className="feature">
          <h3>Made for real projects</h3>
          <p>
            From sketching to final touches — we’ve got you covered.
          </p>
        </div>

        <div className="feature">
          <h3>Support that feels human</h3>
          <p>
            Need help picking supplies? We’re happy to guide you.
          </p>
        </div>
      </section>

      {/* Big CTA */}
      <section className="home-cta">
        <h2>Ready to create something?</h2>
        <p>
          Start with supplies that support your ideas — not distract from them.
        </p>
        <a href="/catalog" className="home-btn primary">
          Shop the Catalog
        </a>
      </section>
    </main>
  );
}

export default Home;
