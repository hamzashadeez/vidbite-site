import React, {useState, useEffect, useContext} from "react";
import Box from "../Components/Box";
import "./Dashboard.css";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from "@material-ui/icons/People";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import {StoryContext} from '../Context/StoryContent'
import {db} from '../firebase'

function Dashboard() {
  const [data, setData] = useContext(StoryContext);
  const [numberOfStories, setNumber] = useState(0)
  useEffect(() => {
    setTimeout(async () => {
      const list = [];
      const story = await db.ref('story');
      story.on('value', (snapshot) => {
        setData({...snapshot.val()});
      });
      for (const x in data) {
        list.push(data[x]);
        console.log(x)
      }
      setNumber(list.length)
    }, 50);
  }, []);
  return (
    <div className="dashboard">
      <div className="first_row">
        <Box
          number="100"
          label="Users"
          icon={<PeopleIcon style={{ fontSize: 40 }} />}
        />
        <Box
          number={numberOfStories}
          label="Stories"
          icon={<LocalLibraryIcon style={{ fontSize: 40 }} />}
        />
        <Box
          number="234"
          label="Videos"
          icon={<VideoLibraryIcon style={{ fontSize: 40 }} />}
        />
        <Box number="101" label="Alerts" icon={<NotificationsActiveIcon style={{ fontSize: 40 }} />} />
      </div>
    </div>
  );
}

export default Dashboard;
