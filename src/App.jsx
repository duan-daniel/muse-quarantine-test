import React, { Component } from "react";
import Landing from "./components/LandingPage/Landing";
import Quiz from "./components/QuizPage/Quiz";

import { Router, Switch, Route } from 'react-router-dom';
import history from './history'

class App extends Component {
    state = {};
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/quiz" component={Quiz} />
                </Switch>
            </Router>
        );
    }
}

export default App;
