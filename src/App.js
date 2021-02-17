import React from 'react';
import Main from './lessons/Main';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './lessons/route_DOM/About';
import Contact from './lessons/route_DOM/Contact';
import User from './lessons/route_DOM/User';
import Search from './lessons/route_DOM/Search';
import Error from './lessons/route_DOM/Error';
import Menu from './lessons/route_DOM/Menu';

function App() {
  const Name = () => {
    return <h1> Hello This is Name </h1>;
  };

  return (
    <>
      <Menu />
      {/* <Main /> */}
      <Switch>
        <Route exact path="/" component={() => <About name="Component" />} />
        {/* Use render when we need to pass props through menu  */}
        <Route exact path="/contact" render={() => <Contact name="Render" />} />
        {/* use of Params  to add path dymamically */}
        <Route path="/user/:fname/:lname" component={User} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/search" component={Search} />
        {/* <Route component={Error} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
