import logo from './logo.svg';
import './App.css';
import LastGraph from './pages/LastGraph';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewGraph from './pages/NewGraph';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<NewGraph/>}/>
        <Route path="/last" element={<LastGraph/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
