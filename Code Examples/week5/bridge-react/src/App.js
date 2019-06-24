import React from "react";

import './App.css';
import BridgeMenu from './components/BridgeMenu.js';
import BridgeInfo from "./components/BridgeInfo";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bridge: null
    };
  }

  handleBridgeChange(bridge){
    this.setState({ bridge });
  }
  
  render(){
    return (
      <div id="app">
        <nav id="menu">
          <BridgeMenu onChange={this.handleBridgeChange.bind(this)}/>
        </nav>
        <div id="bridge-info">
            <BridgeInfo bridge={this.state.bridge} />
        </div>
      </div>
    );
  }
}


export default App;
