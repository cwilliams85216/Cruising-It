import React , { useEffect } from 'react';
import './App.scss';
import team from './images/about-team.jpg';
import bike1 from './images/classicBike.jpg';
import bike2 from './images/highSeatBike.jpg';
import bike3 from './images/mountainBike.jpg';
import bike4 from './images/standardBike.jpg';
import team2 from './images/team.jpg';
import office from './images/office.jpg';
import logo from './images/bikeLogo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div classNameName = "App">
      {/* Navigation Bar */}
      
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#"><img class="logo" src={logo}/>
            <b> Cruising</b> It</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
              <div className="menu-items">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#products">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            <div className="user-login">
              <button type="button" className="btn btn-warning login">Log In</button>
              <button type="button" className="btn btn-outline-warning sign-up">Sign Up</button>
            </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <div className="jumbotron jumbotron-fluid" id="home">
        <div className="container page-intro">
          <h1 className="display-3 page-title"><b className="animation">Cruising</b> It</h1>
          <p className="lead">Take an adventure.</p>
        </div>
      </div>

      {/* About Us */}
      <section className="about" id="about">
        <div className="container">
          <p className="about-year">2002</p>
          <div className="about-header">
            <h2 className="about-title">
              <b data-aos="fade">About</b> Us</h2><br></br>
            <p className="quote">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"</p>
          </div>
          <div className="row about-row">
            <div className="col-md">
              <p className="about-info">
              Suspendisse at eleifend quam. 
              Vestibulum consequat orci sed lacus mattis ultrices. 
              Donec nec luctus purus. Aenean sed tincidunt velit, ac tincidunt nunc. 
              Vivamus molestie velit dui, et scelerisque metus consequat ut. Nullam vitae mattis lacus. 
              
              </p>
            </div>
            <div className="col-md">
              <p className="about-info">
              Duis consectetur sem eget accumsan sagittis. Aenean leo orci, volutpat quis tincidunt non, auctor at dolor. 
              Quisque vulputate augue sit amet felis malesuada, at accumsan velit facilisis. Mauris non vulputate risus. 
              Aliquam porta at turpis non egestas. Donec eu nulla eget risus condimentum volutpat.
              Integer iaculis, ex at tristique euismod, erat elit sodales dui, non pharetra sem orci eget tortor.
              </p>
            </div>
            <div className="col-md">
              <img className="about-img" src= {team} alt="Team photo"/>
            </div>
          </div>
        </div>
      </section>

      {/*Products*/}
      <section className="products" id="products">
        <div className="products-section">
          <h2 className="products-title"><b data-aos="fade">Pro</b>ducts</h2>
          <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={bike1} class="d-block w-100" alt="Classic Bike"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1>Classic</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={bike2} class="d-block w-100" alt="High Seat Bike"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1>High Seat </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={bike3} class="d-block w-100" alt="Mountain Bike"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1>Mountain</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={bike4} class="d-block w-100" alt="Standard Bike"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h1>Standard</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/*Team*/}
      <section className="team-section" id="team">
        <div className="container">
          <h2 className="team-title"><b data-aos="fade">Meet</b> The Team</h2>
          <div className="row row-team">
            <div className="col-md">
              <img className ="team-img" src={office} alt="Office building"/>
            </div>
            <div className="col-md">
              <img className ="team-img" src={team2} alt="Team photo"/>
            </div>
            <div className="col-md">
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                 Quisque ullamcorper tincidunt leo sed vulputate. Praesent ex est, ornare et mattis rutrum, dictum at lectus.<br/><br/>
                 Vivamus dictum facilisis erat et imperdiet. In feugiat metus eu lectus rutrum, ultricies dignissim dolor euismod. 
                 Integer fermentum porttitor ante, sit amet hendrerit nisi maximus non.</p>
            </div>
          </div>
        </div>
      </section>

      {/*Contact*/}
      <section className="contact-section" id="contact">
        <h2 className="contact-title"><b data-aos="fade">Contact</b> Us</h2>
        <div className="container">
            <div className="row sub-row">
              <div className="col sub-col">
                <h3>Hours of Operation</h3>
              </div>
              <div className="col sub-col">
                <h3>Location</h3>
              </div>
            </div>
            <div className="row contact-row">
              <div className="col">
                <table className="hours">
                  <tr>
                    <td className="day">Monday:</td>
                    <td className="time">8:AM-7:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Tuesday:</td>
                    <td className="time">8:AM-7:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Wednesday:</td>
                    <td className="time">8:AM-7:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Thursday:</td>
                    <td className="time">8:AM-7:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Friday:</td>
                    <td className="time">8:AM-7:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Saturday:</td>
                    <td className="time">10:AM-5:00pm</td>
                  </tr>
                  <tr>
                    <td className="day">Sunday:</td>
                    <td className="time">10:AM-3:00pm</td>
                  </tr>
                </table>
              </div>
              <div className="col">
                <p className="contact-location">
                  0000 Westward Way<br/>
                  City, State 00000<br/>
                  (555)-000-000
                </p>
              </div>
            </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container-fluid footer-container">
          <div className="row">
            <p className="footer-social">
              Follow Us: <br/>
                      <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
                      <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
                      <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
            </p>
            <div className="col">
              <p className="footer-logo"><img class="logo-foot" src={logo}/><b data-aos="fade"> Cruising</b> It</p>
            </div>
          </div>
        </div>
      </footer>
    

    </div>
  );
}

export default App;
