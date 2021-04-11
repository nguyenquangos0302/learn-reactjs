import "./App.css";
import { Route, Switch } from "react-router";
import TodoFeature from "features/TodoFeature";
import AlbumFeature from "features/AlbumFeature";
import Header from "components/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/todo" component={TodoFeature}></Route>
        <Route path="/album" component={AlbumFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
