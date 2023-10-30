import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResultPage from './components/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/result' element={<ResultPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
