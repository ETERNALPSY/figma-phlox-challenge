import './nav.scss'
import shopping from '../../assets/shopping.png'
import search from '../../assets/browse.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand navbar text-danger" href="#">
              P H L O X
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <strong>Home</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <Link to="/login">
              <button className="btn me-2 " type="submit">
                login
              </button>
              </Link>
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <div className="container-img--search">
                  <img className="img-search" src={search} alt="search" />
                </div>
              </div>
              <button className="btn " type="submit">
                <img className="shopping" src={shopping} alt="shopping" />
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  };
  export default Navbar;