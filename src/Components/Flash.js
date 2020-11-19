import React, { useState, useEffect, useContext } from "react";
import "./Flash.css";
import Lottie from "react-lottie";
import { auth } from "../firebase";
import { UserContext } from "../Context";
import * as animationData from "./flash.json";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import {StoryContext} from '../Context/StoryContent'
import {db} from '../firebase'

function Flash() {
  const [pause] = useState(false);
  const [loading] = useState(true);
  
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [user, setUser] = useContext(UserContext);
  const [data, setData] = useContext(StoryContext);
  useEffect(() => {
    setTimeout(async () => {
      const story = await db.ref('story');
      story.on('value', (snapshot) => {
        setData({...snapshot.val()});
      });
      console.log('Home Screen: ', data);
    }, 50);
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log('from flash')
  //       console.log(authUser);
  //       setUser({isSigned: true})
  //     }
  //   });

  //   return () => {
  //     //some clean ups
  //     unsubscribe();
  //   };
  // }, []);
  return (
    <div className="flash">
      <h1>
        Vid<span>Bite</span>
      </h1>
      <HashLoader
          css={override}
          size={50}
          color={"#24d8a6"}
          loading={loading}
        />
      {/* <Lottie options={defaultOptions}
        isStopped={pause}
        isPaused={pause}
        height={400}
        width= {400}
       
      /> */}
    </div>
  );
}

export default Flash;
