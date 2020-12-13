import React, { Component } from "react";
class WelcomeMessage extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron gradient">
        <h1 className="display-4">Welcome Message</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nisl
          at odio ullamcorper fringilla quis eu sapien. Curabitur aliquet eu
          tortor ut bibendum. Proin sit amet neque vehicula, hendrerit nisi
          quis, egestas orci. Vivamus placerat ultrices dui at consectetur.
          Mauris aliquam sapien et augue luctus dictum. Proin consectetur neque
          tellus, vitae porttitor sem pulvinar id. Pellentesque id leo risus.
          Nullam vestibulum eros vel risus ultricies iaculis.
        </p>
      </div>
    );
  }
}

export default WelcomeMessage;
