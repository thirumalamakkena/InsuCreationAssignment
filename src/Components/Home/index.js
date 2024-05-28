import { Component } from "react";
import Header from "../Header";
import DesignComponent from "../DesignComponent";
import ProfileCard from "../ProfileCard";
import ImageCarousel from "../ImageCarousel";
import "./index.css";
class Home extends Component {


  render() {
    return (
      <>
        <div className="home-main-container">
          <Header />
          <div className="home-section-1">
            <div className="home-section-1-content">
              <h1 className="home-section-1-heading">
                Best Mobile App Showcase
              </h1>
              <p className="home-section-1-para">
                Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris
                quis massa nisi. Nullam porta lorem at volutpat euismod. Proin
                in ex nunc.
              </p>
              <button className="home-section-1-button">Read More</button>
            </div>
            <div className="home-section-1-image-container">
              <img
                src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716713200/c9zdnbgazge40pq8pzs0.png"
                alt="home"
                className="home-section-1-image"
              />
            </div>
          </div>
          <div className="home-section-2">
            <div className="home-section-2-inner-container">
              <div className="home-section-2-content">
                <>
                  <h1 className="home-section-2-heading">
                    Engaging & Spacious School Campus
                  </h1>
                  <p className="home-section-2-para">
                    Hise sed augue vitae felis pellentesque varius nec quis
                    nunc. Morbi mauris augue, pulvinar quis luctus eget.
                    Phasellus gravida lacus quis eros lobortis, nec dapibus quam
                    gravida.
                  </p>
                </>
              </div>
              <div className="home-section-2-image-container">
                <img
                  src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716714293/lxxx47jee71r7ofctik3.png"
                  alt="home"
                  className="home-section-2-image"
                />
              </div>
            </div>
            <ul className="home-section-2-components">
              <DesignComponent />
              <DesignComponent />
              <DesignComponent />
            </ul>
          </div>
          <div className="home-section-3">
            <div className="home-section-3-image-container">
              <img
                src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716727788/4667617-removebg-preview_1_vapxrg.png"
                alt="home"
                className="home-section-3-image"
              />
            </div>
            <div className="home-section-3-content">
              <h1 className="home-section-3-heading">
                Easy And Perfect Solution For Your Business App
              </h1>
              <p className="home-section-3-para">
                Aliquam aliquet purus a est consequat lobortis. Etiam vehicula
                suscipit purus, eget ullamcorper augue blandit vitae. Ut eu
                euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar
                turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed
                fermentum a lacus bibendum convallis. Consequat purus aliquet a
                est aliquam lobortis. Etiam vehicula suscipit purus, eget
                ullamcorper augue blandit vitae....
              </p>
              <button className="home-section-1-button">Read More</button>
            </div>
          </div>
          <div className="home-section-4">
            <div className="home-section-4-content">
              <h1 className="home-section-4-heading">
                How does This App Work?
              </h1>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
            <div className="home-section-4-image-container">
              <img
                src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716731004/sk16swrglyurrxdscgh8.png"
                alt="home"
                className="home-section-4-image"
              />
            </div>
          </div>
          <div className="home-section-5">
            <div className="home-section-5-image-container">
              <img
                src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716799318/s5u7wxi4rstligol5v7d.png"
                alt="home"
                className="home-section-5-image"
              />
            </div>
            <div className="home-section-5-content">
              <h1 className="home-section-5-heading">
                Designed & Worked By The Latest Partners
              </h1>
              <p className="home-section-5-para-1">
                Aliquam varius ligula nec leo tempus porta.
              </p>
              <p className="home-section-5-para-1 home-section-5-para-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
              <p className="home-section-5-para-1">
                Suspendisse vitae varius diam, a vulputate urna.
              </p>
              <p className="home-section-5-para-1">
                Aliquam aliquet purus eget lacus pretium.
              </p>
            </div>
          </div>
          <div className="home-section-6">
            <div className="home-section-6-content">
              <h1 className="home-section-6-heading">App Screenshots</h1>
              <p className="home-section-6-para">
                Saepe quo labore aenean dictumst expedita commodi auctor, nisl,
                lorem iusto feugiat nemo reiciendis laboris.
              </p>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
