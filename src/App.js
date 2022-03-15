import React from "react";
import {BrowserRouter} from 'react-router-dom'

import GlobalStyled from "./styles/GlobalStyled";
import Header from "./components/header";
import Routes from "./routes";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
   <Routes />
   <GlobalStyled/>
   </BrowserRouter>
   </>
  )

}

export default App;
