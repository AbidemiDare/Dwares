import "./hero.css";

function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-info">
            <h1>
              Your home of quality <span>gadget</span>
            </h1>
            <div className="hero-search">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search for an item..."
              />
              <button type="submit" className="hero-search-btn btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="social-handles">
        <div className="social-wrapper">
          <a href="">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
          </a>
          <a href="">
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
