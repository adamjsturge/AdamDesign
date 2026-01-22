import { Redirect, Route, Switch } from "wouter";

import { Layout } from "./components/layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Settings from "./pages/Settings";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/results" component={Results} />
      <Route path="/settings" component={Settings} />
      <Route path="/about" component={About} />
      <Route path="/home">
        <Redirect to="/" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default App;
