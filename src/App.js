import "./App.css";
import { Count } from "./pages/Count/Count";
import { Header } from "./components/header/index";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { DragAndDrop } from "./pages/dragAndDrop";
import { NavBar } from "./components/navBar/navBar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header-nav__content">
          <NavBar />
          <Header />
        </div>
        <Route path="/" render={() => <Redirect to={"/drag-and-drop"} />} />
        <Route path="/drag-and-drop" component={DragAndDrop} />
        <Route path="/count" component={Count} />
      </div>
    </Router>
  );
}

export default App;
