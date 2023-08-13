import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<ViewDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
