/* Import */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from '../Pages/Error';
import About from '../Pages/About';
import Weather from '../Pages/Weather';
import Contact from '../Pages/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" exact Component={Error} />
          <Route path="/" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="/weather" exact Component={Weather} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
