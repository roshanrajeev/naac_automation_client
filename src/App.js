import { Route, Routes } from 'react-router-dom';

import Editor from './pages/editor/Editor';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Editor/>}/>
      </Routes>
    </div>
  );
}

export default App;
