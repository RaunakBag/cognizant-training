import React from "react";
import "./style.css";
import SesaonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate!!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <div>Loading</div>;
  }
}

export default App;
