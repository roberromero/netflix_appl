import './app.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/Watch/Watch';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Watch" element={<Watch />}/>

          {/* To Redirect when user types "/Home" */}
          <Route path='/Home' element={<Navigate to="/"/>}/>
          
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
        
    
      
    </div>
  );

}

export default App;
