import React from "react";
import { Router } from 'react-router-dom'

import history from "./services/history";
import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/header";
import Routes from "./routes";
function App() {
  return (
    <>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyled />
      </Router>
    </>
  )

}

export default App;
