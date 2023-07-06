// import logo from "./logo.svg";
import { Component } from "react";
import Header from "./components/Header.js";
import List from "./components/List.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Rendering Elements</h1>
        <Header list="List Makanan" />
        <List />
        <Footer name="Makanan Nusantara" />
      </div>
    );
  }
}

export default App;
