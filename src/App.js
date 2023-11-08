import './App.css'
import ConsumerPage from './Components/ConsumerPage';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import ConsumerManagerPage from './Components/ConsumerManagerPage'
function App() {
  return (
    <div className="App p-6">
      {/* <SideBar/> */}
      <Navbar/>
      {/* <ConsumerPage/> */}
      <ConsumerManagerPage/>
    </div>

  );
}

export default App;
