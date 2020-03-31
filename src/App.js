import React, { Component } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar.js'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Global.js';
import { Menu } from './components/Menu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <TopNavBar />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <p className="App-intro">{this.state.apiResponse}</p>




      </div>
    );
  }
}

export default App;
