import './App.css';
import Forms from './component/Forms';
import Navbar from './component/Navbar';
import Cal from './component/Cal';
import Home from './component/Home';
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';

function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/cal" element={<Cal />}/>
          <Route path = "/forms" element={<Forms />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
