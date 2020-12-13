import React, { Component } from "react";
import firebase from "../../firebase";
import { v4 as uuidv4 } from 'uuid';
import history from '../../history';

class DemographicsForm extends Component {

    latitude = "";
    longitude = "";
    uuid = "";

    state = {
        grade: "Freshman",
        school: "SEAS",
        gender: "Female",
        ethnicity: "American Indian or Alaska Native",
        onCampus: "On-Campus", 
    };

    handleSelectGrade = event => {
        this.setState({grade: event.target.value});
    }

    handleSelectSchool = event => {
        this.setState({school: event.target.value});
    }

    handleSelectGender = event => {
        this.setState({gender: event.target.value});
    }

    handleSelectEthnicity = event => {
        this.setState({ethnicity: event.target.value});
    }

    handleSelectOnCampus = event => {
        this.setState({onCampus: event.target.value});
    }

    setLatAndLong = (callback) => {
        let that = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            that.latitude = position.coords.latitude;
            that.longitude = position.coords.longitude;
            callback();
          });

    }

    setUniqueUUID = () => {
        this.uuid = uuidv4();
    }

    writeToDatabase = () => {
        console.log("in callback");
        firebase.firestore().collection("users").doc(this.uuid).set({
            grade: this.state.grade,
            school: this.state.school,
            gender: this.state.gender,
            ethnicity: this.state.ethnicity,
            onCampus: this.state.onCampus,
            latitude: this.latitude,
            longitude: this.longitude,
            uuid: this.uuid, 
            score: 0
        });
        console.log("added this user!");
    }

    onSubmit = event => {
        event.preventDefault();
        this.setUniqueUUID();
        this.setLatAndLong(this.writeToDatabase);
        history.push({
            pathname: '/quiz',
            state: {userID: this.uuid}
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Grade:</label>
                <div>
                    <select className="custom-select" value={this.state.grade} onChange={this.handleSelectGrade}>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>
                <br></br>

                <label>School:</label>
                <div>
                    <select className="custom-select" value={this.state.school} onChange={this.handleSelectSchool}>
                        <option value="SEAS">SEAS</option>
                        <option value="The College">The College</option>
                        <option value="Wharton">Wharton</option>
                        <option value="Nursing">Nursing</option>
                    </select>
                </div>
                <br></br>

                <label>Gender:</label>
                <div>
                    <select className="custom-select" value={this.state.gender} onChange={this.handleSelectGender}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <br></br>

                <label>Ethnicity:</label>
                <div>
                    <select className="custom-select" value={this.state.ethnicity} onChange={this.handleSelectEthnicity}>
                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                        <option value="Asian">Asian</option>
                        <option value="African American">African American</option>
                        <option value="Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <br></br>

                <label>Location:</label>
                <div>
                    <select className="custom-select" value={this.state.onCampus} onChange={this.handleSelectOnCampus}>
                        <option value="On-Campus">On-Campus</option>
                        <option value="Off-Campus">Off-Campus</option>
                    </select>
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary">Take the Quiz!</button>

            </form>
        );
    }
}

export default DemographicsForm;
