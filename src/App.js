import './App.css';
import NavPanel from './components/NavPanel';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
