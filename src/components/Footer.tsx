import './styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="authorship">
        <p>© 2024 Your Name or Your Organization's Name</p>
      </div>
      <div className="contact">
        <p>Email: your-email@example.com</p>
        <p>Phone: +1-234-567-8901</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/your-profile">Facebook</a>
        <a href="https://www.twitter.com/your-profile">Twitter</a>
      </div>
      <div className="newsletter">
        <form
          action="/subscribe"
          method="post"
        >
          <label htmlFor="email">Subscribe to our newsletter:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
          <input
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
      <div className="search">
        <form
          action="/search"
          method="get"
        >
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
          />
          <input
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </footer>
  );
}
export default Footer;
