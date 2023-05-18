import "./main.scss";
import Headphone from "../../assets/Wireless-Headphone.png";
const Main = () => {
  return (
    <div className="container-main">
      <div className="title-wireless">
        <p>
          <strong>Beats Solo</strong>
        </p>
        <h2>
          <strong>Wireless</strong>
        </h2>
      </div>
      <div className="container-tittle">
        <h1>
          HEAD <span>ONE</span>
        </h1>
      </div>
      <div className="description ">
        <button>Shop By Category</button>
        <h5>
          <strong>Description</strong>
        </h5>
      </div>
      <p className="description-product">
          There are many variations pages Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Maxime, nisi! Natus sint blanditiis
          officiis.
        </p>
      <img src={Headphone} alt="Wireless-Headphone" />
    </div>
  );
};

export default Main;
