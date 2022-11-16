import 'bulma/css/bulma.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home";
import Game from "./pages/game";
import packageinfo from "../package.json"

function App() {

  return (
    <BrowserRouter basename={getBasename()}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/game" element={<Game/>}/>
    </Routes>
    </BrowserRouter>
  );
}

function getBasename() {
  const array = packageinfo.homepage.split("/");
  return array[array.length-1]; 
}

export default App;
