import React from "react";
import "./Story.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Story({ data }) {
  const image = "http://www.loremimages.com?size=350x150";
  return (
    <div className="__story">
      <div className="__storyheader">
        <img src={data.profilePhotoURL} alt="dp" />
        {/* <AccountCircleIcon style={{ fontSize: "40px", marginRight: "10px" }} /> */}
        <div className="__inner">
          <h5>{data.username}</h5>
          <p>{data.id}</p>
        </div>
      </div>
      <div className="__storybody">
        <img src={data.image} alt="image" />
      </div>
      <div className="__caption">
        <p>{data.caption}</p>
      </div>
      <div className="__storyfooter">
        <button>{data.likes} Likes</button>
        <button>{data.comments} Comments</button>
      </div>
    </div>
  );
}

export default Story;
