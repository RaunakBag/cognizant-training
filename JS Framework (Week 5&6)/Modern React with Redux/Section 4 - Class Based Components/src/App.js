import React from "react";
import "./style.css";
import SesaonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Lattitude: </div>;
  }
}

export default App;
