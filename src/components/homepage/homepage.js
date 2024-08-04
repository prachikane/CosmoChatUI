import React from "react";
import "./homepage.css";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div className="container">
      <div className="text-zone">
      <br/><br/><br/><br/><br/><br/>
        <h1>Welcome to CosmoChatUI</h1><br/><br/>

        <h3>An AI powered ChatBot to help you get the required advice</h3><br/><br/>

        <Button href="/cosmochat" variant="contained" size="large">
          {" "}
          Start Chat with CosmoChat{" "}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
