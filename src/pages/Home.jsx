import ProductList from "../components/ProductList";
import style from "../css/Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.home}>
      <img src="/assets/imgs/header.jpg" alt="header" />
      <div className="pages-container">
        <div className={style.desc}>
          <h2>Welcome to your politician poster webshop.</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus tortor, dictum vel erat sit amet, ultrices viverra sapien. Nullam eget sagittis tortor. In vitae lacus ornare, laoreet tellus vel, tempor massa. Maecenas vulputate molestie tellus. Aliquam ultrices lacinia nisi vitae rhoncus. Vivamus laoreet neque in dolor consequat, sed vulputate velit ornare. Cras congue fermentum eleifend. Quisque quis eros neque. Suspendisse lorem orci, scelerisque sed consectetur eget, fermentum in nulla. Nulla pharetra viverra ex, sit amet pretium lorem aliquam eu. Cras suscipit arcu eget turpis venenatis maximus vitae ut turpis. Cras ac cursus leo, quis bibendum risus. Maecenas commodo ac mi et ultricies. Vivamus pulvinar mauris a ex molestie, sed viverra dolor gravida. Morbi viverra, odio in venenatis pulvinar, orci ligula auctor turpis, quis congue tellus tellus eget erat. 
          </p>
          <NavLink exact to="/about">
            <button className="btn-sm">Learn more</button>
          </NavLink>
        </div>
        <ProductList />
        <div className={style.seeAll}>
          <NavLink exact to="/products">
            View all products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
