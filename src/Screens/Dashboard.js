import React from "react";
import Box from "../Components/Box";
import "./Dashboard.css";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleIcon from "@material-ui/icons/People";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="first_row">
        <Box
          number="100"
          label="Users"
          icon={<PeopleIcon style={{ fontSize: 40 }} />}
        />
        <Box
          number="1201"
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
