import React, { Component } from "react";
import Drawer from "./UI/Drawer/Drawer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Store/reducer";
import "./App.css";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Drawer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
