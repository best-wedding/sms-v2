import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/school/dashboard";
import { AnimatePresence } from "framer-motion";
import Students from "./pages/school/students";
import Teachers from "./pages/school/teachers";
import Events from "./pages/school/events";
import Finance from "./pages/school/finance";
import Food from "./pages/school/food";
import User from "./pages/school/user";
import SMS from "./pages/school/sms";
import Activity from "./pages/school/activity";
import React from "react";
import Login from './pages/login';
function App() {
  return (
    <div className="bg-purple-50">
    <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/:slug/" component={Dashboard} />
              <Route exact path="/:slug/dashboard" component={Dashboard} />
              <Route exact path="/:slug/students" component={Students} />
              <Route exact path="/:slug/teachers" component={Teachers} />
              <Route exact path="/:slug/events" component={Events} />
              <Route exact path="/:slug/finance" component={Finance} />
              <Route exact path="/:slug/food" component={Food} />
              <Route exact path="/:slug/user" component={User} />
              <Route exact path="/:slug/sms" component={SMS} />
              <Route exact path="/:slug/activity" component={Activity} />
              <Route exact path="/:slug/login" component={Login} />
            </Switch>
          </AnimatePresence>
        )}
         />
        </BrowserRouter>
    {/* <Dashboard /> */}
      {/* <Router>
          <Route component={Dashboard} exact href="/" />
      </Router> */}
    </div>
  );
}

export default App;
