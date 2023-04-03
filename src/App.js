
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Create from './create';
import Edit from './Edit';
import Display from './Dispaly';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>

      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/:id" element={<Edit/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
