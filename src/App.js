
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom' //include the Switch when coming back
// Switch import was replaced by Routes in react-router-dom-v6


function App() {
  return (
    <Router>
      <header>
        <nav>
          <link to="/">Home</link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes >
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;