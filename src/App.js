//
import React from "react";
import "./App.css";
import { getLCP } from "web-vitals";

//
function FormatNumber({ number }) {
  return (
    <span style={{ color: "red" }}>
      {new Intl.NumberFormat("ES-MX", {
        style: "currency",
        currency: "MXN"
      }).format(number)}
    </span>
  );
}

//
class App extends React.Component {
  state = {
    number: 0
  };

  handleChange = event => {
    this.setState({
      number: event.target.value > 999999999 ? 999999999 : event.target.value,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <h1>
          LCD <FormatNumber number={number} />
        </h1>
        <input type="number" onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;