import React from "react";
import "./sidebar.css";
import { Button } from "@mui/material";


const Sidebar = () => {

    const chatHistory = []
  return (
    <div className="nav-bar">
      <div className="upper">
      <h3>CosmoChat</h3>
        <nav>
            <Button href="/cosmochat" variant="contained"> + New Chat </Button>
        </nav>
        
      </div>
      <div className="lower">
      <h3>Activity Page</h3>
        <nav>
            <Button href="/cosmochat/activity" variant="contained">Go to activity page</Button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
