import React, { Component } from 'react';
import firebase from "../../firebase";
import Checkbox from "./Checkbox";

const OPTIONS = ["Question One:", "Question Two:", "Question Three:", "Question Four:"];

class Quiz extends Component {
    state = { 
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
              ...options,
              [option]: false
            }),
            {}
          )
     }

    userID = this.props.location.state.userID
    score = 0

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };
    
    writeToDatabase = () => {
        console.log(this.score);
        var ref = firebase.firestore().collection("users").doc(this.userID);
        ref.update({
          score: this.score
        })
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            this.score++;
            console.log(checkbox, "is selected.");
          });
        
        this.writeToDatabase();
    };



    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );
    
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    render() { 
        return (
            <div className="question-list">
                <h1>User ID: {this.userID}</h1>
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>

        );
    }
}
 
export default Quiz;