import React from "react";
import PropTypes from "prop-types";
import photo from "../profile/ProfilPhoto.jpg";
const Profile = (props) => {
  console.log(`props:`, props);
  return (
    <div>
      <h2>{props.fullName}</h2>
      <h3>{props.bio}</h3>
      <h3>{props.profession}</h3>
      <img src={photo} alt="pic" />
    </div>
  );
};
Profile.defaultProps = { name: "Malek" };

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.any,
};
export default Profile;
