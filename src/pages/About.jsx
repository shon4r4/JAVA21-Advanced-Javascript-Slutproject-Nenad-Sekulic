import style from "../css/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className={style.about}>
      <h1>About me</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, nisi ultrices finibus tincidunt, lectus ipsum dictum turpis, ornare consequat elit ante eget tortor. Phasellus pretium ante nec nisi auctor fringilla. Vivamus nisi nulla, maximus sit amet dolor at, hendrerit pellentesque lorem. Curabitur vel arcu et diam finibus consectetur et in felis. Nulla vestibulum ut tellus eget vulputate. Maecenas in ante nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.<br />
        <br /> 
      </p>
      <div className={style.social}>
        <a href="https://www.instagram.com/herrsekulic/">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
        </a>
        <a href="https://github.com/nensek">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
    </div>
  );
};

export default About;
