import { BsArrowRight } from "react-icons/bs";
import "./index.css";

const DesignComponent = () => (
  <li>
    <div className="ui-container">
      <div className="ui-image-container">
        <img
          src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716716378/x8vdqlh8nyk9oid00uav.png"
          alt="home"
          className="ui-image"
        />
      </div>
      <div className="ui-content">
        <h1 className="ui-heading">Perfect UI Design</h1>
        <p className="ui-para">
          Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut
          vitae ante ut mi vehicula vulputate.
        </p>
        <button className="ui-button">
          <BsArrowRight />
        </button>
      </div>
    </div>
  </li>
);

export default DesignComponent;
