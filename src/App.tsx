import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "components/Dashboard";
import { AnimatePresence } from "framer-motion";
import Students from "components/Students";
import Teachers from "components/Teachers";
import Events from "components/Events";
import Finance from "components/Finance";
import Food from "components/Food";
import User from "components/User";
import SMS from "components/SMS";
import Activity from "components/Activity";
function App() {
  return (
    <div className="bg-purple-50">
    <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/students" component={Students} />
              <Route exact path="/teachers" component={Teachers} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/finance" component={Finance} />
              <Route exact path="/food" component={Food} />
              <Route exact path="/user" component={User} />
              <Route exact path="/sms" component={SMS} />
              <Route exact path="/activity" component={Activity} />
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
