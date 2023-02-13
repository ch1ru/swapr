import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='__main'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="*" element={ <></> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
