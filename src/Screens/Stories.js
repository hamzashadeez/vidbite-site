import React, { useState, useEffect, useContext } from "react";
import Story from "../Components/Story";
import "./Stories.css";
import { db } from "../firebase";
import {StoryContext} from '../Context/StoryContent'

function Stories() {
const [raw] = useContext(StoryContext);
  const [story, setStories] = useState([]);
  useEffect(() => {
    const list = [];
    const subscribe = () => {
    //   const data = db.ref("story");
    //   data.on("value", function (snapshot) {
    //     const raw = snapshot.val();
        for (const x in raw) {
          list.push(raw[x]);
        }
    //   });
      setStories(list);
      console.log(story)
      console.log(list)
    };
    subscribe();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundColor: "rgb(205, 234, 243)",
        flexDirection: "column",
      }}
    >
      <div className="headerStory">
        <h1>Stories</h1>
      </div>
      <div
        style={{
          height: "92vh",
          padding: "30px",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {story.map((str) => {
          return <Story data={str} />;
        })}
      </div>
    </div>
  );
}

export default Stories;
