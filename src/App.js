import { Route, Routes } from 'react-router-dom';

import Editor from './pages/editor/Editor';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/editor" element={<Editor/>}/>
      </Routes>
    </div>
  );
}

export default App;
