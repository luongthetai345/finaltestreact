import logo from './logo.svg';
import './App.css';
import ThemeLayoutComponent from './Layout/ThemeLayout';
import { Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import Active from './Pages/Active';
import Complete from './Pages/Complete';
import Notfound from './Pages/404';
import ThemeLayout from './Layout/ThemeLayout';


function App() {

 

  return (
    <div className="App">
      
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/' element={<ThemeLayout />} >
          <Route path='/all' element={<All />} />
          <Route path='/active' element={<Active />} />
          <Route path='/complete' element={<Complete />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
