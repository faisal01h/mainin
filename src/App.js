import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Board from "./pages/board";
import Home from "./pages/home";
import Loby from "./pages/loby";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>

          <Route path="/loby">
            <Loby />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
