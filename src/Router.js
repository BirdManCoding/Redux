import { Fragment } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Blog from "./components/Blog";
import Home from "./components/Home";

function Router() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path='/blog' component={Blog} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default Router;
