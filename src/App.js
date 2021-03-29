import "./App.css";
import { Count } from "./pages/Count/Count";
import { Header } from "./components/header/index";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { DragAndDrop } from "./pages/dragAndDrop";
import { NavBar } from "./components/navBar/navBar";
import TodoApp from "./pages/TodoRedux/components/TodoApp";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
// import { ToDoLayout } from "./pages/Todo/ToDoLayout";
// import TodoApp from "./pages/TodoSand/TodoSand";
// import TodoContainer from "./pages/Todo/TodoContainer";
// import { DragSecond } from "./pages/dragDropSecond/index";
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="header-nav__content">
            <NavBar />
            <Header />
          </div>

          <Route path="/" render={() => <Redirect to={"/count"} />} />
          <Route path="/drag-and-drop" component={DragAndDrop} />
          <Route path="/count" component={Count} />
          <Route path="/todo" component={TodoApp} />

          {/* <Route path="/mytodos" component={TodoApp} /> */}
          {/* <Route path="/todo" component={ToDoLayout} /> */}
          {/* <Route path="/drag-and-drop-second" component={DragSecond} /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
