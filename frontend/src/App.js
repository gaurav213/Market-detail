import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Component/login";
import AddUsers from "./Component/Adduser";
import { Router } from "@material-ui/icons";
import Home from "./Component/Homepage";
import Notfound from "./Component/Notfound";
import About from "./Component/About";
import Contact from "./Component/Contact";
import News from "./Component/News";

import { useState } from "react";

function App() {
  const [userl, setLoginUser] = useState({});
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Router exact path="/" component={Home} />
          <Router exact path="/about" component={About} />
          <Route path="/add" component={AddUsers}>
            {userl && userl._id ? (
              <AddUsers setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>

          <Router exact path="/contact" component={Contact} />

          <Router exact path="/disclaimer" component={News} />

          <Router component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
