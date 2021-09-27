import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Typography, CssBaseline } from "@mui/material";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Router>
        <Switch>{/* <Route path="/" exact component={Home} /> */}</Switch>
      </Router>
    </>
  );
}

export default App;
