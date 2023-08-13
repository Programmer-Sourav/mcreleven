import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails';
import WatchLater from './pages/WatchLater';
import StarredMovies from './pages/StarredMovies';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<ViewDetails/>}/>
      <Route path='/watchlater' element={<WatchLater/>}/>
      <Route path='/starredmovieslist' element={<StarredMovies/>}/>
     </Routes>
    </div>
  );
}

export default App;
