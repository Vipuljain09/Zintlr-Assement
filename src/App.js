import './App.css'
import ConsumerPage from './Components/ConsumerPage';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import ConsumerManagerPage from './Components/ConsumerManagerPage'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [showSideBar,setShowSidebar] = useState(false);
  const sideBarHandler = ()=>setShowSidebar(preValue=>!preValue);

  return (
    <div className="App p-6">
      {showSideBar && <SideBar onSideBar={sideBarHandler}/>}
      <Navbar onSideBar={sideBarHandler}/>
      <Routes>
        <Route index path='/' element={<ConsumerPage/>}/>
        <Route path='/manager' element={<ConsumerManagerPage/>}/>
      </Routes>
      
    </div>

  );
}

export default App;
