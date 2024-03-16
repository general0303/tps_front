import './App.css';
import './styles/Header.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Mode from "./components/Mode";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header>
                <Header/>
            </header>
            <div className="App-Menu">
                <Menu/>
            </div>
            <div className="App-Content">
                <div className="Content">
                  <Routes>
                      {<Route path='/'  element={<Main/>}/>}
                      {<Route path='/modes'  element={<Mode/>}/>}
                  </Routes>
                </div>
            </div>
         </BrowserRouter>
    </div>
  );
}

export default App;
