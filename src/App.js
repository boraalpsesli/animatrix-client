import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseLayout from "./components/BaseLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Animes from "./pages/Main/Animes";
import Favorites from "./pages/Main/Favorites";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <BaseLayout>
              <Animes />
            </BaseLayout>
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <BaseLayout>
              <Favorites />
            </BaseLayout>
          )}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
      </Switch>
    </Router>
  );
}

export default App;
