import "./index.css";

const ProfileCard = () => (
  <div className="profile-card-container">
    <div className="profile-image-card">
      <img
        src="https://res.cloudinary.com/dpakgiqtz/image/upload/v1716731098/hxndkzaxhuu9nkdeq42q.png"
        alt="home"
        className="profile-image"
      />
    </div>
    <div className="profile-card-content">
      <h1 className="profile-card-heading">Make A Profile</h1>
      <p className="profile-card-para">
        Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at
        nunc imperdiet, quis lacinia nisi euismod.
      </p>
    </div>
  </div>
);

export default ProfileCard;