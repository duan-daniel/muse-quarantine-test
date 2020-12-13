import React, { Component } from "react";
import WelcomeMessage from "./WelcomeMessage";
import DemographicsForm from "./DemographicsForm";
import "./Landing.css";

class Landing extends Component {
    state = {};
    render() {
        return (
            <div>
                <WelcomeMessage />
                <DemographicsForm />
            </div>
        );
    }
}

export default Landing;
