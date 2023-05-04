import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';
import Home from './pages/Home';
import FundAccount from './pages/FundAccount';
import BackupAccount from './pages/BackupAccount';
import Loading from './pages/Loading';

function App() {
  return (
    <Router>
      <div className='__main'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/loading" element={ <Loading /> } />
          <Route path="/fundaccount" element={ <FundAccount/> } />
          <Route path="/backupaccount" element={ <BackupAccount /> } />
          <Route path="*" element={ <></> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
