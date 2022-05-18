import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.contact}>
          <h3>Nensek</h3>
          <address>
            <a href="mailto:nensek@hotmail.com">
               nensek@hotmail.com
            </a>
            <p>
            Magle Stora kyrkogata 5 <br /> 223 50 Lund{" "}
            </p>
            <p>070-123 22 22</p>
          </address>
        </div>
        <div className={style.form}>
          <h3>Subscribe for our newsletter</h3>
          <p>Sign up to recieve news and updates.</p>
          <form>
            <input type="text" placeholder="Email Address" />
            <button type="submit" className="btn-sm">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
